import { createSelector } from 'reselect';

const getImage = state => state.image;

export const getImageLink = createSelector(
    getImage, 
    image => image.fileLink,
);