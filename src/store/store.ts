import { createStore, applyMiddleware, Store } from 'redux';
import thunk from "redux-thunk";
import weatherReducer from './reducer';

const store: Store<any, any> & {
    dispatch: any
} = createStore(weatherReducer, applyMiddleware(thunk))

export default store;