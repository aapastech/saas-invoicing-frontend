import { createSelector } from 'reselect';
import { stateHelper } from 'app/selectors';

export const getFeatureFlags = state => state.profile.featureFlags;

export const hasOverlays = createSelector(
    getFeatureFlags,
    featureFlags => featureFlags.FEATURE_OVERLAY
);

export const hasPayouts = createSelector(
    getFeatureFlags,
    featureFlags => featureFlags.FEATURE_PAYOUTS
);

export const getFeatureFlagsFromStore = () => {
    return stateHelper(getFeatureFlags);
};

const featureSelectorMap = {
    'overlays': hasOverlays,
    'payouts': hasPayouts,
};

const hasfeature = (feature) => {
    const selector = featureSelectorMap[feature];
    if (!selector) return false;
    return stateHelper(selector);
};

export default hasfeature;