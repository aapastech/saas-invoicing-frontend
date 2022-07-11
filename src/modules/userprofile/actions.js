import * as types from './actionTypes';

export function getAccountDetails() {
    return {
        type: types.GET_ACCOUNT_DETAILS
    }
}

export function getAccountDetailsSuccess(accountDetails) {
    return {
        type: types.GET_ACCOUNT_DETAILS_SUCCESS,
        accountDetails
    }
}

export function saveAccountDetails(accountDetails) {
    return {
        type: types.SAVE_ACCOUNT_DETAILS,
        accountDetails
    }
}

export function toggleEdit() {
    return {
        type: types.TOGGLE_EDIT_VISIBILITY,
    }
}

export function getAccountMembershipSuccess(membership) {
    return {
        type: types.GET_MEMBERSHIP_SUCCESS,
        membership
    }
}

export function onMembershipUpdateSuccess(payment) {
    return {
        type: types.UPDATE_MEMBERSHIP_SUCCESS,
        payment
    }
}

export function setFeatureFlags(featureFlags) {
    return {
        type: types.UPDATE_FEATURE_FLAGS,
        featureFlags
    }
}

export function saveUserDetails(userDetails) {
    return {
        type: types.SAVE_USER_DETAILS,
        userDetails
    }
}