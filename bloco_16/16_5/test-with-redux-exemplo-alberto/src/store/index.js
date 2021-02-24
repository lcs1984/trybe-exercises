import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';

const rootReducer = combineReducers({ clickReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
