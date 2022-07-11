import { createSelector } from 'reselect';
import { stateHelper } from 'app/selectors';

const getAuth = state => state.auth;

export const getIsUserAuthenticated = createSelector(
    getAuth, 
    auth => auth.isAuthenticated
);

export const getUserToken = createSelector(
    getAuth, 
    auth => auth.token
);

export const getuserTokenFromStore = () => {
    const isUserAuthenticated = stateHelper(getIsUserAuthenticated);
    if (isUserAuthenticated) {
        const userAuthToken = stateHelper(getUserToken);
        return userAuthToken;
    }
    return null;
};

export const getIsUserAuthenticatedFromStore = () => {
    return stateHelper(getIsUserAuthenticated);
};