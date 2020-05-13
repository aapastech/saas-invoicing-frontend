import { takeLatest, put } from 'redux-tale/es/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import API_CONFIG from 'constants/apiconfig';
import api from 'utils/client';
import { showToast } from 'utils/ui';

function* onUploadFile({ file }) {
    const { message = {}, type } = API_CONFIG.UPLOAD_FILE;
    try {
        const form = new FormData();
        form.append('file', file);
        const fileLink = yield api[type]({ 
            ...API_CONFIG.UPLOAD_FILE,
            body: form, 
            noContentHeaders: true,
            noBodyChange: true,
        });
        showToast(message.success, 'success');
        yield put(actions.onUploadFileSucess(fileLink));
    } catch (error) {
        const errorMessage = message.error[error.status];
        showToast(errorMessage, 'error');
        throw error;
    }
}

const onUploadImageSaga = takeLatest(actionTypes.ON_UPLOAD_FILE, onUploadFile);

export default [
    onUploadImageSaga,
];