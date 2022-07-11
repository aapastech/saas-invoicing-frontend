import * as actionTypes from './actiontypes';

export function onLoginSuccess(token) {
    return {
        type: actionTypes.ON_AUTHENTICATION_SUCCESS,
        token
    }
}

export function onLogout() {
    return {
        type: actionTypes.ON_LOGOUT
    }
}