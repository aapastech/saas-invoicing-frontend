import { createSelector } from 'reselect';

const getOverlays = state => state.overlays;

export const getStepsStatus = createSelector(
    getOverlays, 
    overlays => overlays.createOverlay
);

export const getOverlaysList = createSelector(
    getOverlays, 
    ({ data }) => data
);

export const getSelectedOverlay = createSelector(
    getStepsStatus,
    ({ overlayType, overlayCategory, overlayTemplate, overlayName }) => ({
        type: overlayType.selected,
        category: overlayCategory.selected,
        template: overlayTemplate.selected,
        name: overlayName.selected,
    }),
);

export const getCustomizeOverlay = createSelector(
    getOverlays,
    overlays => overlays.customizeOverlay
);