import _ from 'lodash';
import * as actionTypes from './actiontypes';

export function onLogin({ username, password, remember }, redirectUrl) {
    return {
        type: actionTypes.ON_LOGIN,
        username,
        password,
        remember,
        redirectUrl,
    }
}

export function onSignup(userInput, redirectUrl) {
    return {
        type: actionTypes.ON_SIGNUP,
        ...userInput,
        redirectUrl,
    }
}

export function onSignupSuccess() {
    return {

    }
}

export function onForgotPassword({ useremail }, redirectUrl) {
    return {
        type: actionTypes.ON_FORGOT_PASSWORD,
        useremail,
        redirectUrl,
    }
}

export function onForgotPasswordSuccess(useremail) {
    return {
        type: actionTypes.ON_FORGOT_PASSWORD_SUCCESS,
        useremail
    }
}

export function onVerificatonCodeSubmit(verificationCode, redirectUrl) {
    return {
        type: actionTypes.ON_VERIFICATION_CODE_SUBMIT,
        verificationCode,
        redirectUrl,
    }
}

export function onResendVerificationCode(useremail) {
    return {
        type: actionTypes.ON_RESEND_VERIFICATION_CODE,
        useremail
    }
}

export function onResetPassword(userInput, redirectUrl) {
    return {
        type: actionTypes.ON_RESET_PASSWORD,
        ...userInput,
        redirectUrl,
    }
}