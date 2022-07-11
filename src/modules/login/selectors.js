import { createSelector } from 'reselect';
import { stateHelper } from 'app/selectors';

const getUserManagement = state => state.userManagement;

export const getUserEmailForResetPassword = createSelector(
    getUserManagement, 
    userManagement => userManagement.resetPasswordForUserEmail
);

export const getUserEmailForResetPasswordFromStore = () => {
    return stateHelper(getUserEmailForResetPassword);
};