import getStore from './store';

export const stateHelper = function(selector) {
    if(!selector) throw Error('Please pass the selector you want to trigger');
    return selector(getStore().getState());
}