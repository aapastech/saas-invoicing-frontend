import _ from 'lodash';
import * as actiontypes from './actiontypes';

const initialState = {
    linksList: [],
    createdLink: null,
};

export default function links(state = initialState, action) {
    switch(action.type) {
        case actiontypes.ON_FETCH_LINKS_SUCCESS:
            return _.defaults({}, { linksList: action.linksList }, state);
        case actiontypes.ON_CREATE_LINK_SUCCESS:
        case actiontypes.ON_UPDATE_LINK_SUCCESS:
            return _.defaultsDeep({}, { createdLink: action.link }, state);
        case actiontypes.ON_CLEAR_CREATED_LINK:
            return _.defaultsDeep({}, { createdLink: null }, state);
        default:
            return state;
    };
}