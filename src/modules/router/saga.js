import { takeLatest, put } from 'redux-tale/es/effects';
import * as actionTypes from './actiontypes';
import * as actions from './actions';
import { showToast } from 'utils/ui';

/*
url, 
headers, 
isProtected = true, 
isJson = true, 
urlParams = null, 
body = {}
*/

function* onLogout() {
    
}

const onLogoutSaga = takeLatest(actionTypes.ON_LOGOUT, onLogout);

export default [
    onLogoutSaga,
];