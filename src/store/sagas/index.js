import { all } from 'redux-saga/effects';
import * as searchSaga from './searchSaga';
import * as favoritesSaga from './favoritesSaga';

export default function* rootSaga() {
  yield all([searchSaga.watchSearchSaga(), favoritesSaga.watchFavoritesSaga()]);
}
