import { createStore, applyMiddleware } from 'redux';
import orderReducer from './reducer';
import { thunk } from 'redux-thunk';

const store = createStore(orderReducer, applyMiddleware(thunk));

export default store;
