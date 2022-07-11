import { createSelector } from 'reselect';
import { stateHelper } from 'app/selectors';

const getLinks = state => state.links;

export const getLinksList = createSelector(
    getLinks, 
    links => links.linksList,
);

export const getNewCreatedLink = createSelector(
    getLinks,
    links => links.createdLink,
)