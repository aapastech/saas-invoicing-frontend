import * as types from './actionTypes';


export function onGetUsage() {
    return {
        type: types.GET_USAGE,
    }
}

export function onGetUsageSuccess(usage) {
    return {
        type: types.GET_USAGE_SUCCESS,
        usage
    }
}

export function onGetUsageFailure(error) {
    return {
        type: types.GET_USAGE_FAILURE,
        error
    }
}

export function onGetStats() {
    return {
        type: types.GET_STATS,
    }
}

export function onGetStatsSuccess(stats) {
    return {
        type: types.GET_STATS_SUCCESS,
        stats,
    }
}

export function onGetStatsFailure(error) {
    return {
        type: types.GET_STATS_FAILURE,
        error,
    }
}

export function onGetLinks() {
    return {
        type: types.GET_LINKS,
    }
}

export function onGetLinksSuccess(links) {
    return {
        type: types.GET_LINKS_SUCCESS,
        links,
    }
}

export function onGetLinksFailure(error) {
    return {
        type: types.GET_LINKS_FAILURE,
        error,
    }
}

export function onGetOverlays() {
    return {
        type: types.GET_OVERLAYS,
    }
}

export function onGetOverlaysSuccess(overlays) {
    return {
        type: types.GET_OVERLAYS_SUCCESS,
        overlays,
    }
}

export function onGetOverlaysFailure(error) {
    return {
        type: types.GET_OVERLAYS_FAILURE,
        error,
    }
}