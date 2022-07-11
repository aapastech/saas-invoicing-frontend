import { takeLatest, put } from 'redux-tale/es/effects';
import * as actionTypes from './actiontypes';
import * as actions from './actions';
import API_CONFIG from 'constants/apiconfig';
import api from 'utils/client';
import { showToast } from 'utils/ui';

function* onFetchLinks() {
    const { message = {}, type } = API_CONFIG.LINKS_LIST;
    try {
        const linksList = yield api[type]({ ...API_CONFIG.LINKS_LIST });
        yield put(actions.onFetchLinksSuccess(linksList));
    } catch (error) {
        console.error(error);
        const errorMessage = message.error[error.status];
        if(errorMessage) showToast(errorMessage);
    }
}

function* onCreateLink({ link }) {
    const { message = {}, type } = API_CONFIG.LINK_CREATE;
    try {
        const createdLink = yield api[type]({ 
            ...API_CONFIG.LINK_CREATE,
            body: { 
                ...link,
            }, 
        });
        showToast(message.success, 'success');
        yield onFetchLinks();
        yield put(actions.onCreateLinkSuccess(createdLink));
    } catch (error) {
        const errorMessage = message.error[error.status];
        showToast(errorMessage, 'error');
        throw error;
    }
}

function* onDeleteLink({ linkId }) {
    const { message = {}, type } = API_CONFIG.LINK_DELETE;
    try {
        yield api[type]({ 
            ...API_CONFIG.LINK_DELETE,
            urlParams: { linkId } 
        });
        showToast(message.success, 'success');
        yield onFetchLinks();
    } catch (error) {
        console.error(error);
        const errorMessage = message.error[error.status];
        if(errorMessage) showToast(errorMessage);
    }
}

function* onUpdateLink({ link }) {
    const { message = {}, type } = API_CONFIG.LINK_UPDATE;
    try {
        const updatedLink = yield api[type]({ 
            ...API_CONFIG.LINK_UPDATE,
            body: { 
                ...link,
            }, 
            urlParams: { linkId: link.id },
        });
        showToast(message.success, 'success');
        yield onFetchLinks();
        yield put(actions.onUpdateLinkSuccess(updatedLink));
    } catch (error) {
        const errorMessage = message.error[error.status];
        showToast(errorMessage, 'error');
        throw error;
    }
}

const onFetchLinksSaga = takeLatest(actionTypes.FETCH_LINKS, onFetchLinks);
const onCreateLinkSaga = takeLatest(actionTypes.ON_CREATE_LINK, onCreateLink);
const onUpdateLinkSaga = takeLatest(actionTypes.ON_UPDATE_LINK, onUpdateLink);
const onDeleteLinkSaga = takeLatest(actionTypes.ON_DELETE_LINK, onDeleteLink);

export default [
    onFetchLinksSaga,
    onCreateLinkSaga,
    onUpdateLinkSaga,
    onDeleteLinkSaga,
];