import { takeLatest, put } from 'redux-tale/es/effects';
import * as redirectActions from 'modules';
import * as authActions from 'modules/router/actions';
import * as userProfileActions from 'modules/userprofile/actions';
import * as actionTypes from './actiontypes';
import * as actions from './actions';
import { showToast } from 'utils/ui';
import api from 'utils/client';
import API_CONFIG from 'constants/apiconfig';
import { getUserEmailForResetPasswordFromStore } from './selectors';

function* onLogin({ username, password, remember, redirectUrl }) {
    const { message = {}, type } = API_CONFIG.USER_LOGIN;
    try {
        const token = yield api[type]({ 
            ...API_CONFIG.USER_LOGIN,
            headers: { "Authorization": `Basic ${btoa(`${username}:${password}`)}` },
            body: { remember }, 
        });
        showToast(message.success, 'success');
        yield put(authActions.onLoginSuccess(token));
        yield put(redirectActions.redirectTo(redirectUrl));
        yield put(userProfileActions.getAccountDetails());
    } catch (error) {
        const errorMessage = message.error[error.status];
        showToast(errorMessage, 'error');
    }
}

function* onSignup({ redirectUrl, ...userInputs }) {
    const { message = {}, type } = API_CONFIG.USER_CREATE;
    var query = new URLSearchParams(window.location.search);
    let referredBy = '';
    try {
        referredBy = atob(query.get('referral'));
    } catch (e) {
        referredBy = '';
    }

    try {
        const user = yield api[type]({ 
            ...API_CONFIG.USER_CREATE,
            body: { ...userInputs, referredBy }, 
        });
        if (user) {
            showToast(message.success, 'success');
            yield onLogin({ ...userInputs, redirectUrl });
        }
    } catch (error) {
        const errorMessage = message.error[error.status];
        showToast(errorMessage, 'error');
    }
}

function* sendVerificationCode({ useremail }) {
    const { message = {}, type } = API_CONFIG.USER_SEND_VERIFICATION_CODE;
    try {
        yield api[type]({ 
            ...API_CONFIG.USER_SEND_VERIFICATION_CODE,
            urlParams: { username: useremail }
        });
        showToast(message.success, 'success');
    } catch (error) {
        const errorMessage = message.error[error.status];
        showToast(errorMessage, 'error');
    }
}

function* onForgotPassword({ redirectUrl, useremail }) {
    try {
        yield sendVerificationCode({ useremail });
        yield put(actions.onForgotPasswordSuccess(useremail));
        yield put(redirectActions.redirectTo(redirectUrl));
    } catch (error) {
        console.error(error);
    }
}

function* onResendVerificationCode({ useremail }) {
    try {
        yield sendVerificationCode({ useremail });
    } catch (error) {
        console.error(error);
    }
}

function* onVerificationCodeSubmit({ verificationCode, redirectUrl }) {
    const { message = {}, type } = API_CONFIG.USER_VERIFY;
    try {
        const username = getUserEmailForResetPasswordFromStore();
        const token = yield api[type]({ 
            ...API_CONFIG.USER_VERIFY,
            body: { username, verificationCode }, 
        });
        yield put(authActions.onLoginSuccess(token));
        showToast(message.success, 'success');
        yield put(redirectActions.redirectTo(redirectUrl));
    } catch (error) {
        const errorMessage = message.error[error.status];
        showToast(errorMessage, 'error');
    }
}

function* onResetPassword({ redirectUrl, password }) {
    const { message = {}, type } = API_CONFIG.USER_UPDATE;
    try {
        yield api[type]({ 
            ...API_CONFIG.USER_UPDATE,
            body: { password }, 
        });
        const username = getUserEmailForResetPasswordFromStore();
        showToast(message.success, 'success');
        yield onLogin({ 
            username, 
            password, 
            redirectUrl 
        });
    } catch (error) {
        const errorMessage = message.error[error.status];
        showToast(errorMessage, 'error');
        yield put(redirectActions.redirectTo(redirectUrl));
    }
}

const onLoginSaga = takeLatest(actionTypes.ON_LOGIN, onLogin);
const onSignupSaga = takeLatest(actionTypes.ON_SIGNUP, onSignup);
const onForgotPasswordSaga = takeLatest(actionTypes.ON_FORGOT_PASSWORD, onForgotPassword);
const onResendVerificationCodeSaga = takeLatest(actionTypes.ON_RESEND_VERIFICATION_CODE, onResendVerificationCode);
const onVerificationCodeSubmitSaga = takeLatest(actionTypes.ON_VERIFICATION_CODE_SUBMIT, onVerificationCodeSubmit);
const onResetPasswordSaga = takeLatest(actionTypes.ON_RESET_PASSWORD, onResetPassword);

export default [
    onLoginSaga,
    onSignupSaga,
    onForgotPasswordSaga,
    onResendVerificationCodeSaga,
    onVerificationCodeSubmitSaga,
    onResetPasswordSaga
];