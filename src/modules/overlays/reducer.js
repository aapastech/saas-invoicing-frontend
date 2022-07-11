import _ from 'lodash';
import * as actiontypes from './actiontypes';

const activeStep = {
    active: true,
    completed: false,
    disabled: false,
    selected: '',
};
const deactiveStep = {
    completed: false,
    disabled: true,
    active: false,
    selected: '',
};

const initOverLay = {
    overlayType: {...activeStep},
    overlayCategory: {...deactiveStep},
    overlayTemplate: {...deactiveStep},
    overlayName: {...deactiveStep}
};

const selectedOverlay = {};
//For development
// const selectedOverlay = {
//     type: 'bar',
//     category: 'optin',
//     template: '1',
//     name: 'development'
// };

const initialState = {
    data: [],
    createOverlay: {
        ...initOverLay,
    },
    customizeOverlay: {
        ...selectedOverlay
    }
};

export default function overlay(state = initialState, action) {
    switch(action.type) {
        case actiontypes.ON_FETCH_OVERLAYS_SUCCESS:
            return _.defaults({}, { data: action.data }, state);
        case actiontypes.TYPE_SELECTED:
            return handleSelection('overlayCategory', 'overlayType', action.overlayType, state);
        case actiontypes.CATEGORY_SELECTED:
            return handleSelection('overlayTemplate', 'overlayCategory', action.overlayCategory, state);
        case actiontypes.TEMPLATE_SELECTED:
            return handleSelection('overlayName', 'overlayTemplate', action.overlayTemplate, state);
        case actiontypes.NAME_SELECTED:
            return handleSelection('', 'overlayName', action.overlayName, state);
        case actiontypes.BACK_TO_TEMPLATE:
            return handleBack('overlayTemplate', 'overlayName', state);
        case actiontypes.BACK_TO_CATEGORY:
            return handleBack('overlayCategory', 'overlayTemplate', state);
        case actiontypes.BACK_TO_TYPE:
            return handleBack('overlayType', 'overlayCategory', state);
        case actiontypes.SAVE_OVERLAY_SUCCESS:
            return _.defaultsDeep({}, { createOverlay: initOverLay }, state);
        case actiontypes.LOAD_CUSTOMIZE_OVERLAY:
            return _.defaultsDeep({}, { customizeOverlay: action.overlay }, state);
        case actiontypes.ON_OVERLAY_DETAILS_SUCCESS:
            return _.defaultsDeep({}, { customizeOverlay: action.overlay }, state);
        case actiontypes.ON_CLEAR_CUSTOMIZE_OVERLAY:
            return { ...state, customizeOverlay: {} };
        default:
            return state;
    };
}

function handleBack(activeStepName, deactiveStepName, state) {
    let createOverlay = {
        [activeStepName]: {...activeStep},   
        [deactiveStepName]: {...deactiveStep},
    };
    createOverlay = _.defaultsDeep({}, createOverlay, state.createOverlay);
    return _.defaultsDeep({}, { createOverlay }, state);
}

function handleSelection(nextStep, selectedStep, selected, state) {
    let createOverlay = {
        [selectedStep]: {
            ...deactiveStep,
            selected
        },
    }
    if (nextStep) {
        createOverlay[nextStep] = {...activeStep };
    }

    createOverlay = _.defaultsDeep({}, createOverlay, state.createOverlay);
    return _.defaultsDeep({}, { createOverlay }, state);
}