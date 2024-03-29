import React from 'react';

import Router from './Router';

//react-redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers';

import {composeWithDevTools} from 'remote-redux-devtools';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))

const App = prop => (
  <Provider store={store}>
      <Router />
  </Provider>
)

export default App;
