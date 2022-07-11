import { createSelector } from 'reselect';

const getAdmin = state => state.admin;

export const getAffiliates = createSelector(
    getAdmin, 
    admin => admin.affiliates
);
