import { takeLatest, put } from 'redux-tale/es/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import API_CONFIG from 'constants/apiconfig';
import api from 'utils/client';
import { showToast } from 'utils/ui';

function* onGetAffiliates() {
    const { message = {}, type } = API_CONFIG.PAYOUTS_STATS;
    try {
        const affiliatesData = yield api[type]({ ...API_CONFIG.PAYOUTS_STATS });
        yield put(actions.onGetAffiliatesSuccess(affiliatesData));
    } catch (error) {
        console.error(error);
        const errorMessage = message.error[error.status];
        if(errorMessage) showToast(errorMessage);
    }
}

function* onSendPayouts() {
    const { message = {}, type } = API_CONFIG.PAYOUTS_SEND;
    try {
        const payoutResponse = yield api[type]({ ...API_CONFIG.PAYOUTS_SEND });
        showToast(message.success, 'success');
    } catch (error) {
        console.error(error);
        if(error.displayMessage) {
            showToast(error.displayMessage, 'error');
        }
        const errorMessage = message.error[error.status];
        if(errorMessage) showToast(errorMessage);
    }
}

const onGetAffiliatesSaga = takeLatest(actionTypes.GET_AFFILIATES, onGetAffiliates);
const onSendPayoutsSaga = takeLatest(actionTypes.SEND_PAYOUTS, onSendPayouts);

export default [
    onGetAffiliatesSaga,
    onSendPayoutsSaga,
];