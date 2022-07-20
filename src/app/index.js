import React from 'react';
import { Routes } from 'modules';
import Loader from 'components/loader';
import { Provider } from 'react-redux';
import getStore from './store.js';

const store = getStore();

function App() {
  return (
      <Provider store={store}>
        <Loader />
        <Routes />
      </Provider>
  );
}

export default App;
