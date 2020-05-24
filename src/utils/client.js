import _ from 'lodash';
import { getuserTokenFromStore } from 'modules/router/selectors';
import { redirectTo } from 'modules';
import { showToast } from 'utils/ui';
import routeConstants from 'modules/router/constants';
import { actionDispatchHelper } from 'app/actions';
import { onLogout } from 'modules/router/actions';
import { getIsUserAuthenticatedFromStore } from 'modules/router/selectors';

function getAuthHeaders() {
    const userToken = getuserTokenFromStore();
    if (userToken) {
        return {
            Authorization: `Bearer ${userToken}`
        };
    }
    return false;
}

function prepareHeaders(userProvidedHeaders, isProtected, noContentHeaders) {
    let headers = noContentHeaders ? {} : {
        'Content-Type': 'application/json',
    }; 
    if (isProtected) {
        const authHeaders = getAuthHeaders();
        if (!authHeaders) throw { message: 'User not authenticated' };
        headers = {
            ...headers,
            ...authHeaders,
        };
    }
    return {
        ...headers,
        ...userProvidedHeaders
    };
}

function parameterizeUrl(url, urlParams = {}) {
    let sanitizedUrl = url;
    _.forEach(urlParams, (paramValue, paramName) => {
        sanitizedUrl = _.replace(sanitizedUrl, `{${paramName}}`, paramValue);
    });
    return sanitizedUrl;
}

function apiErrorHandler(e) {
    let redirectError = false;
    if (e.message === 'Failed to fetch') {
        redirectError = true;
        showToast('Engineers at work! Please try again later', 'error', { exclusive: true });
    } else if(e.status === 400 && getIsUserAuthenticatedFromStore()) {
        redirectError = true;
        showToast('Please login again. You have been logged out', 'error', { exclusive: true });
    }
    _.forEach(client.subscribers, ({ onError }) => onError(onError));
    if (redirectError) {
        actionDispatchHelper(onLogout);
        redirectTo(routeConstants.LOGIN);
    }
    throw e;
}

function callAPI(
    method, userProvidedHeaders, isProtected, url, urlParams, isJson, body = null, 
    hasLoader = true, noContentHeaders = false, noBodyChange = false,
    ) {
    const headers = prepareHeaders(userProvidedHeaders, isProtected, noContentHeaders);
    const parameterizedUrl = parameterizeUrl(url, urlParams);
    const optionalParams = {};
    if (body) {
        if (!noBodyChange) optionalParams.body = JSON.stringify(body);
        else optionalParams.body = body;
    }

    //Fire onStart of all subscribers
    if (hasLoader) _.forEach(client.subscribers, ({ onStart }) => onStart());
    try {
        const callPromise = fetch(parameterizedUrl, {
            method,
            headers,
            ...optionalParams
        }).then(response => {
            _.forEach(client.subscribers, ({ onComplete }) => onComplete(response));
            if (response.status >= 200 && response.status < 300) {
                _.forEach(client.subscribers, ({ onSuccess }) => onSuccess(response));
                if (isJson) return response.json();
                return response.text();
            } else {
                _.forEach(client.subscribers, ({ onError }) => onError(onError));
                return response.json().then(jsonError => {
                    throw { status: response.status, ...jsonError };
                });
            }
        }).catch(apiErrorHandler);
        return callPromise;
    } catch(e) {
        apiErrorHandler(e);
    }
}

/* Params for a client method: 
    url, 
    headers, 
    isProtected = true, 
    isJson = true, 
    urlParams = null, 
    body = {}
*/
const nop = _.noop;

const client = {
    subscribers: {},
    get: ({ 
        url, headers = {}, isProtected = true, urlParams = {}, isJson = true, hasLoader, noContentHeaders, noBodyChange
    }) => {
        return callAPI('GET', headers, isProtected, url, urlParams, isJson, null, hasLoader, noContentHeaders, noBodyChange);
    },
    post: ({ 
        url, headers, isProtected = true, isJson = true, urlParams = null, body = {}, hasLoader , noContentHeaders, noBodyChange
    }) => {
        return callAPI('POST', headers, isProtected, url, urlParams, isJson, body, hasLoader, noContentHeaders, noBodyChange);
    },
    put: ({ 
        url, headers, isProtected = true, isJson = true, urlParams = null, body = {}, hasLoader, noContentHeaders, noBodyChange
    }) => {
        return callAPI('PUT', headers, isProtected, url, urlParams, isJson, body, hasLoader, noContentHeaders, noBodyChange);
    },
    delete: ({ 
        url, headers = {}, isProtected = true, urlParams = {}, isJson = true, hasLoader, noContentHeaders, noBodyChange
    }) => {
        return callAPI('DELETE', headers, isProtected, url, urlParams, isJson, null, hasLoader, noContentHeaders, noBodyChange);
    },
    subscribe: ({ onStart = nop, onError = nop, onSuccess = nop, onComplete = nop }) => {
        const subscribersCount = _.values(client.subscribers);
        const subscriberIndex = `index-${subscribersCount}`;
        client.subscribers[subscriberIndex] = { onStart, onError, onSuccess, onComplete };
        return () => {
            delete client.subscribers[subscriberIndex];
        };
    },
}
export default client;