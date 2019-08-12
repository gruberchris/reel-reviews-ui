import { combineReducers } from 'redux';
import common from './common';
import favoritesReducer from './favoritesReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  common,
  favoritesReducer,
  searchReducer
});
