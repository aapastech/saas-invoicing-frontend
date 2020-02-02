import _ from 'lodash';
import * as actiontypes from './actiontypes';

const initialState = {
    data: [],
};

export default function overlay(state = initialState, action) {
    switch(action.type) {
        case actiontypes.ON_FETCH_OVERLAYS_SUCCESS:
            return {
                data: action.data,
            };
        default:
            return state;
    };
}