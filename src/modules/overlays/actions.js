import * as actionTypes from './actiontypes';

export function onFetchOverlays() {
    return {
        type: actionTypes.FETCH_OVERLAYS
    }
}

export function onFetchOverlaysSuccess(data) {
    return {
        type: actionTypes.ON_FETCH_OVERLAYS_SUCCESS,
        data,
    }
}

export function selectedPropertyValue(property, value) {
    
}

export function selectOverlayType(overlayType) {
    return {
        type: actionTypes.TYPE_SELECTED,
        overlayType,
    }
}

export function selectOverlayCategory(overlayCategory) {
    return {
        type: actionTypes.CATEGORY_SELECTED,
        overlayCategory,
    }
}

export function selectOverlayTemplate(overlayTemplate) {
    return {
        type: actionTypes.TEMPLATE_SELECTED,
        overlayTemplate,
    }
}

export function selectOverlayName(overlayName, redirectPath) {
    return {
        type: actionTypes.NAME_SELECTED,
        overlayName,
        redirectPath,
    }
}

export function backToType() {
    return {
        type: actionTypes.BACK_TO_TYPE,
    }
}

export function backToTemplate() {
    return {
        type: actionTypes.BACK_TO_TEMPLATE,
    }
}

export function backToCategory() {
    return {
        type: actionTypes.BACK_TO_CATEGORY,
    }
}

export function onSaveOverlaySuccess() {
    return {
        type: actionTypes.SAVE_OVERLAY_SUCCESS,
    }
}

export function loadCustomizeOverlay(overlay, redirectPath) {
    return {
        type: actionTypes.LOAD_CUSTOMIZE_OVERLAY,
        overlay,
        redirectPath
    }
}

export function onSaveCustomizedOverlay(overlay, redirectPath) {
    return {
        type: actionTypes.SAVE_CUSTOMIZED_OVERLAY,
        overlay,
        redirectPath
    }
}

export function onGetOverlay(overlayId) {
    return {
        type: actionTypes.GET_OVERLAY,
        overlayId
    }
}

export function onGetOverlaySuccess(overlay) {
    return {
        type: actionTypes.ON_OVERLAY_DETAILS_SUCCESS,
        overlay,
    }
}

export function onClearSelectedOverlay() {
    return {
        type: actionTypes.ON_CLEAR_CUSTOMIZE_OVERLAY,
    }
}

export function onDuplicateOverlay(overlay, redirectPath) {
    return {
        type: actionTypes.CREATE_NEW_OVERLAY,
        overlay,
        redirectPath
    }
}

export function onDeleteOverlay(overlayId) {
    return {
        type: actionTypes.DELETE_OVERLAY,
        overlayId,
    }
}