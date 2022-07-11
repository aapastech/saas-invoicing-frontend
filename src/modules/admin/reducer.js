import _ from 'lodash';
import * as actiontypes from './actionTypes';

const initialState = {
    affiliates: [],
};

export default function admin(state = initialState, action) {
    switch(action.type) {
        case actiontypes.GET_AFFILIATES_SUCCESS:
            return _.defaults({}, { affiliates: action.affiliates }, state);
        default:
            return state;
    };
}