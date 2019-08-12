import { put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/favoritesActions';

export function* processAddFavoriteStart(payload) {
  try {
    const favoritesApiUrl =
      process.env.REACT_APP_REEL_REVIEWS_API_URL || 'http://localhost:5000/';

    const response = yield fetch(favoritesApiUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const favoriteMovie = yield response.json();

    yield put(actions.addFavoriteCompleted(favoriteMovie));
  } catch (e) {
    e.friendlyErrorMessage =
      'Unable to save this movie to your favorites list. Please try again, later.';
    yield put(actions.addFavoriteFailed(e));
  }
}

export function* watchFavoritesSaga() {
  yield takeEvery(actions.ADD_FAVORITE_START, processAddFavoriteStart);
}
