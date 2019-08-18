import { put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/favoritesActions';

const getFavoritesApiUrl = () =>
  process.env.REACT_APP_REEL_REVIEWS_API_URL || 'http://localhost:5000/';

export function* processAddFavoriteStart(payload) {
  try {
    const favoritesApiUrl = getFavoritesApiUrl();
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

export function* processGetAllFavoritesStart() {
  try {
    const favoritesApiUrl = getFavoritesApiUrl();
    const response = yield fetch(favoritesApiUrl, {
      method: 'GET',
      mode: 'cors'
    });

    const favoriteMovies = yield response.json();
    const payload = { favoriteMovies };
    yield put(actions.getAllFavoritesCompleted(payload));
  } catch (e) {
    yield put(actions.getAllFavoritesFailed(e));
  }
}

export function* processUpdateFavoriteStart({ movieReview, favoriteMovies }) {
  try {
    const favoritesApiUrl = getFavoritesApiUrl() + `/${movieReview._id}`;
    const response = yield fetch(favoritesApiUrl, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movieReview)
    });

    const favoriteMovie = yield response.json();

    const updatedFavoriteMovies = favoriteMovies.map(fav => {
      if (fav._id === favoriteMovie._id) {
        return {
          ...fav,
          ...favoriteMovie
        };
      }

      return fav;
    });

    const payload = {
      favoriteMovies: updatedFavoriteMovies
    };

    yield put(actions.updateFavoriteCompleted(payload));
  } catch (e) {
    yield put(actions.updateFavoriteFailed(e));
  }
}

export function* processDeleteFavoriteStart({ movie, favoriteMovies }) {
  try {
    const favoritesApiUrl = getFavoritesApiUrl() + `/${movie._id}`;

    yield fetch(favoritesApiUrl, {
      method: 'DELETE',
      mode: 'cors'
    });

    const updatedFavoriteMovies = favoriteMovies.filter(fav => fav._id !== movie._id);

    const payload = { favoriteMovies: updatedFavoriteMovies };

    yield put(actions.deleteFavoriteCompleted(payload));
  } catch (e) {
    yield put(actions.deleteFavoriteFailed(e));
  }
}

export function* watchFavoritesSaga() {
  yield takeEvery(actions.ADD_FAVORITE_START, processAddFavoriteStart);
  yield takeEvery(actions.GET_ALL_FAVORITES_START, processGetAllFavoritesStart);
  yield takeEvery(actions.UPDATE_FAVORITE_START, processUpdateFavoriteStart);
  yield takeEvery(actions.DELETE_FAVORITE_START, processDeleteFavoriteStart);
}
