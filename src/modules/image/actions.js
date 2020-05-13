import * as types from './actionTypes';

export function onUpload(file) {
    return {
        type: types.ON_UPLOAD_FILE,
        file
    }
}

export function onUploadFileSucess(fileLink) {
    return {
        type: types.ON_SAVE_IMAGE_SUCCESS,
        fileLink,
    }
}

export function onClearImageLink() {
    return {
        type: types.ON_CLEAR_IMAGE_LINK,
    }
}