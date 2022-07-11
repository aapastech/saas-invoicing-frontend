import getStore from './store';

export const actionDispatchHelper = function(actionFunc, ...args) {
    if(!actionFunc) throw Error('Please pass the actionFunc and then the payload you want to dispatch');
    return getStore().dispatch(actionFunc(...args));
}