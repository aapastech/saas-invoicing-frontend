import _ from 'lodash';
import * as actiontypes from './actionTypes';
import featureFlags from 'constants/featureFlags';

const initialState = {
    user: {},
    accountDetails: [],
    isEditVisible: false,
    membership: {},
    featureFlags,
};

export default function profile(state = initialState, action) {
    switch(action.type) {
        case actiontypes.GET_ACCOUNT_DETAILS_SUCCESS:
            return _.defaults({}, { accountDetails: action.accountDetails }, state);
        case actiontypes.TOGGLE_EDIT_VISIBILITY:
            return _.defaults({}, { isEditVisible: !state.isEditVisible }, state);
        case actiontypes.GET_MEMBERSHIP_SUCCESS:
            return _.defaultsDeep({}, { membership: action.membership }, state);
        case actiontypes.UPDATE_FEATURE_FLAGS:
            return _.defaultsDeep({}, { featureFlags: action.featureFlags }, state);
        case actiontypes.SAVE_USER_DETAILS:
            return _.defaultsDeep({}, { user: action.userDetails }, state);
        default:
            return state;
    };
}