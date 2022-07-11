import { takeLatest, put } from 'redux-tale/es/effects';
import { showToast } from 'utils/ui';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import api from 'utils/client';
import API_CONFIG from 'constants/apiconfig';

function* onGetUsage() {
    const { message = {}, type } = API_CONFIG.USAGE_QUICK_STATS;
    try {
        const usage = yield api[type]({ 
            ...API_CONFIG.USAGE_QUICK_STATS,
        });
        yield put(actions.onGetUsageSuccess(usage));
    } catch (error) {
        const errorMessage = message.error[error.status];
        showToast(errorMessage, 'error');
        yield put(actions.onGetUsageFailure(error));
    }
}

const onGetUsageSaga = takeLatest(actionTypes.GET_USAGE, onGetUsage);

export default [
    onGetUsageSaga,
];