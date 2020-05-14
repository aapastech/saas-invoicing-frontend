import _ from 'lodash';
import { takeLatest, put, takeEvery } from 'redux-tale/es/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { showToast } from 'utils/ui';
import api from 'utils/client';
import API_CONFIG from 'constants/apiconfig';
import { isPaidMemberFromStore } from './selectors';
import * as queries from './queries';

function parseAccountDetails(userDetails) {
    return [
        { label: 'Name', value: userDetails.name },
        { label: 'Email', value: userDetails.username },
        { label: 'Timezone', value: userDetails.timezone },
        { label: 'Referral Link', value: userDetails.referralLink, type: 'link' },
    ];
}

function getMembershipDetails(userDetails) {
    return userDetails.membership;
}

function* onGetAccountDetails() {
    const { message = {}, type } = API_CONFIG.USER_DETAILS;
    try {
        const userDetails = yield api[type]({ 
            ...API_CONFIG.USER_DETAILS,
        });
        yield put(actions.getAccountDetailsSuccess(parseAccountDetails(userDetails)));
        yield put(actions.getAccountMembershipSuccess(getMembershipDetails(userDetails)));
        yield put(actions.saveUserDetails(userDetails));
        const isPaidmember = isPaidMemberFromStore();
        yield put(actions.setFeatureFlags(
            queries.prepareFeatureFlags(isPaidmember, userDetails)
        ));
    } catch (error) {
        console.error(error);
        const errorMessage = message.error[error.status];
        if (errorMessage) {
            showToast(errorMessage, 'error');
        }
    }
}

function* onSaveAccountDetails({ accountDetails: { name, password, timezone } }) {
    const { message = {}, type } = API_CONFIG.USER_UPDATE;
    try {
        yield api[type]({ 
            ...API_CONFIG.USER_UPDATE,
            body: { name, password, timezone }, 
        });
        yield put(actions.toggleEdit());
        yield onGetAccountDetails();
    } catch (error) {
        const errorMessage = message.error[error.status];
        showToast(errorMessage, 'error');
    }
}

function* onUpgradeMembership({ payment }) {
    try {
        console.log(payment);
        yield onGetAccountDetails();
    } catch (error) {
        console.error(error);
    }
}

export default [
    takeLatest(actionTypes.GET_ACCOUNT_DETAILS, onGetAccountDetails),
    takeLatest(actionTypes.SAVE_ACCOUNT_DETAILS, onSaveAccountDetails),
    takeEvery(actionTypes.UPDATE_MEMBERSHIP_SUCCESS, onUpgradeMembership),
];