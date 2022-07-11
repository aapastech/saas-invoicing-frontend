import * as actionTypes from './actiontypes';

export function onFetchLinks() {
    return {
        type: actionTypes.FETCH_LINKS
    }
}

export function onFetchLinksSuccess(linksList) {
    return {
        type: actionTypes.ON_FETCH_LINKS_SUCCESS,
        linksList,
    }
}

export function onCreateLink(link) {
    return {
        type: actionTypes.ON_CREATE_LINK,
        link,
    }
}

export function onCreateLinkSuccess(link) {
    return {
        type: actionTypes.ON_CREATE_LINK_SUCCESS,
        link,
    }
}

export function onUpdateLink(link) {
    return {
        type: actionTypes.ON_UPDATE_LINK,
        link,
    }
}

export function onUpdateLinkSuccess(link) {
    return {
        type: actionTypes.ON_UPDATE_LINK_SUCCESS,
        link,
    }
}

export function onClearCreatedLink(link) {
    return {
        type: actionTypes.ON_CLEAR_CREATED_LINK,
        link,
    }
}

export function onDeleteLink(linkId) {
    return {
        type: actionTypes.ON_DELETE_LINK,
        linkId,
    }
}