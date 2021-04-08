import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {isLoading, plants} from './plants/reducers';
const reducers ={
    plants,
    isLoading,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));