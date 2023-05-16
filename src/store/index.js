import { combineReducers, createStore } from 'redux';
// import getGamesData from './getGamesData';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());