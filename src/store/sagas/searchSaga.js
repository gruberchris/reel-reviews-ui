import { put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/searchActions';

export function* processFindMoviesStart({
  movieTitle,
  currentPage,
  favoriteMovies
}) {
  try {
    // get config from environment variables
    const omdbApiKey = process.env.REACT_APP_OMDBAPI_KEY;
    const omdbApiUrl =
      process.env.REACT_APP_OMDBAPI_URL || 'https://www.omdbapi.com/';

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
      friendlyErrorMessage = 'Could not match that title to any movie.';
    } else {
      movies.map(movie =>
        movie.Poster === 'N/A'
          ? (movie.Poster = 'https://www.123movies.love/images/imdbnoimage.jpg')
          : movie.Poster
      );

      movies.map(movie => {
        const favoriteMovieByImdbID = favoriteMovie =>
          favoriteMovie.imdbID === movie.imdbID;

        const matchedFavoriteMovie = favoriteMovies.find(favoriteMovieByImdbID);

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

export function* processAppendMovieReviewStart({ movies, movieWithReview }) {
  try {
    const comapreImdbId = movie => movie.imdbID === movieWithReview.imdbID;
    const foundMovieIndex = movies.findIndex(comapreImdbId);
    movies[foundMovieIndex] = { ...movieWithReview };
    yield put(actions.appendMovieReviewCompleted({ movies }));
  } catch (e) {
    yield put(actions.appendMovieReviewFailed(e));
  }
}

export function* watchSearchSaga() {
  yield takeEvery(actions.FIND_MOVIES_BY_TITLE_START, processFindMoviesStart);
  yield takeEvery(
    actions.APPEND_MOVIE_REVIEW_START,
    processAppendMovieReviewStart
  );
}
