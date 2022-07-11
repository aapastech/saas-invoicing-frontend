import _ from 'lodash';
import * as actiontypes from './actionTypes';

const initialState = {
    stats: [],
    top5Links: [],
    top5Overlays: [],
};

export default function overlay(state = initialState, action) {
    switch(action.type) {
        case actiontypes.GET_USAGE_SUCCESS:
            return _.defaults({}, { ...action.usage }, state);
        case actiontypes.GET_STATS_SUCCESS:
            return _.defaults({}, { stats: action.stats }, state);
        case actiontypes.GET_LINKS_SUCCESS:
            return _.defaults({}, { top5Links: action.links }, state);
        case actiontypes.GET_OVERLAYS_SUCCESS:
            return _.defaults({}, { top5Overlays: action.overlays }, state);
        default:
            return state;
    };
}