import _ from 'lodash';
import * as actiontypes from './actiontypes';

const initialState = {
    isAuthenticated: false,
    token: ''
};

export default function auth(state = initialState, action) {
    switch(action.type) {
        case actiontypes.ON_AUTHENTICATION_SUCCESS:
            return {
                isAuthenticated: true,
                token: action.token,
            };
        case actiontypes.ON_LOGOUT:
            return {
                isAuthenticated: false,
                token: '',
            };
        default:
            return state;
    };
}