import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducers from './reducers';
import { createSagaMiddleWare, runSagas } from './sagas';
import { loadStateToken, saveStateToken} from 'utils/helper';
import { storeInitialized } from 'models/actions';

function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
}

export const getStore = (function () {
    let store;
    function initStore() {
        store = createStore(
            combinedReducers,
            loadStateToken(),
            compose(
                applyMiddleware(logger, createSagaMiddleWare())
            )
        );
        store.subscribe(() => saveStateToken(store.getState()));
        runSagas();
        window.$store = store;
        store.dispatch(storeInitialized());
    }
    
    return function getStore() {
        if (!store) initStore();
        return store;
    };
})();

export default getStore;