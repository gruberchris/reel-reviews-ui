import { put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/searchActions';

export function* processFindMoviesStart({ movieTitle, currentPage, favoriteMovies }) {
  try {
    // get config from environment variables
    const omdbApiKey = process.env.REACT_APP_OMDBAPI_KEY;
    const omdbApiUrl = process.env.REACT_APP_OMDBAPI_URL || 'https://www.omdbapi.com/';
    const noMoviePosterImageUrl = process.env.REACT_APP_NO_MOVIE_POSTER_IMAGE_URL;

    const requestUrl = encodeURI(
      `${omdbApiUrl}/?s=${movieTitle}&page=${currentPage}&type=movie&apiKey=${omdbApiKey}`
    );

    const response = yield fetch(requestUrl);

    // response data from omdbapi in json format
    let { Search: movies, totalResults } = yield response.json();

    totalResults = parseInt(totalResults);

    let friendlyErrorMessage = '';
    let error = null;

    if (!movies) {
      movies = [];
      friendlyErrorMessage = `No movies found named "${movieTitle}"`;
    } else {
      movies.map(movie => {
        // assign no movie poster image if there no poster is assigned
        if (movie.Poster === 'N/A') {
          movie.Poster = noMoviePosterImageUrl;
        }

        // search comparer function
        const favoriteMovieByImdbID = favoriteMovie => favoriteMovie.imdbID === movie.imdbID;

        // find if this movie is already a favorite
        const matchedFavoriteMovie = favoriteMovies.find(favoriteMovieByImdbID);

        // if this movie is a favorite, copy the rating and review
        // user will see this as a reviewed movie in search results
        if (matchedFavoriteMovie) {
          movie.rating = matchedFavoriteMovie.rating;
          movie.review = matchedFavoriteMovie.review;
        }

        return movie;
      });
    }

    const payload = {
      queryMovieTitle: movieTitle,
      movies,
      currentPage,
      totalResults,
      friendlyErrorMessage,
      error
    };

    yield put(actions.findMoviesByTitleCompleted(payload));
  } catch (e) {
    e.friendlyErrorMessage = 'Unable to find that movie.';
    yield put(actions.findMoviesByTitleFailed(e));
  }
}

export function* processFavoriteCreated({ favoriteCreated, movies }) {
  try {
    const comapreImdbId = x => x.imdbID === favoriteCreated.imdbID;
    const foundMovieIndex = movies.findIndex(comapreImdbId);
    movies[foundMovieIndex] = { ...favoriteCreated };
    yield put(actions.favoriteCreatedCompleted({ movies }));
  } catch (e) {
    yield put(actions.favoriteCreatedFailed(e));
  }
}

export function* processFavoriteRemoved({ favoriteRemoved, movies }) {
  try {
    const comapreImdbId = x => x.imdbID === favoriteRemoved.imdbID;
    const foundMovie = movies.find(comapreImdbId);
    delete foundMovie.rating;
    delete foundMovie.review;
    yield put(actions.favoriteRemovedCompleted({ movies }));
  } catch (e) {
    yield put(actions.favoriteRemovedFailed(e));
  }
}

export function* processFavoriteUpdated({ favoriteUpdated, movies }) {
  try {
    const comapreImdbId = x => x.imdbID === favoriteUpdated.imdbID;
    const foundMovieIndex = movies.findIndex(comapreImdbId);
    movies[foundMovieIndex] = { ...favoriteUpdated };
    yield put(actions.favoriteUpdatedCompleted({ movies }));
  } catch (e) {
    yield put(actions.favoriteUpdatedFailed(e));
  }
}

export function* watchSearchSaga() {
  yield takeEvery(actions.FIND_MOVIES_BY_TITLE_START, processFindMoviesStart);
  yield takeEvery(actions.FAVORITE_CREATED_START, processFavoriteCreated);
  yield takeEvery(actions.FAVORITE_REMOVED_START, processFavoriteRemoved);
  yield takeEvery(actions.FAVORITE_UPDATED_START, processFavoriteUpdated);
}
