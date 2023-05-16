import { combineReducers } from 'redux';
import getGamesData from './getGamesData';

const rootReducer = combineReducers({
  games: getGamesData, // Добавьте редюсеры в объект состояния
  // Добавьте другие редюсеры, если есть
});

export default rootReducer;