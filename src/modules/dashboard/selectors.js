import { createSelector } from 'reselect';

const getDashboard = state => state.dashboard;

export const getStats = createSelector(
    getDashboard, 
    dashboard => dashboard.stats
);

export const getTop5Links = createSelector(
    getDashboard, 
    dashboard => dashboard.top5Links
);

export const getTop5Overlays = createSelector(
    getDashboard, 
    dashboard => dashboard.top5Overlays
);

export const getDashboardData = createSelector(
    getStats,
    getTop5Links,
    getTop5Overlays,
    (stats, links, overlays) => ({ stats, links, overlays }),
);