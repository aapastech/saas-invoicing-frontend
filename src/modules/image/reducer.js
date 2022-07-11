import _ from 'lodash';
import * as actionTypes from './actionTypes';

const initialState = {
    fileLink: '',
};

export default function images(state = initialState, action) {
    switch(action.type) {
        case actionTypes.ON_SAVE_IMAGE_SUCCESS:
            return _.defaults({}, { fileLink: action.fileLink }, state);
        case actionTypes.ON_CLEAR_IMAGE_LINK:
            return _.defaults({}, { fileLink: '' }, state);
        default:
            return state;
    };
}