import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import PaginationComponent from 'react-reactstrap-pagination';
import TitleSearch from '../common/TitleSearch';
import MovieCardGrid from '../common/MovieCardGrid';
import MovieReviewEditorModal from '../common/MovieReviewEditorModal';
import MovieReviewViewerModal from '../common/MovieReviewViewerModal';
import ErrorMessagePanel from '../common/ErrorMessagePanel';
import { favoriteCreatedStart, findMoviesByTitleStart } from '../store/actions/searchActions';
import { addFavoriteStart } from '../store/actions/favoritesActions';

const Search = () => {
  const [showAddFavoriteModal, setShowAddFavoriteModal] = useState(false);
  const [movie, setMovie] = useState({});
  const dispatch = useDispatch();

  const { queryMovieTitle, movies, currentPage, friendlyErrorMessage, totalResults } = useSelector(
    state => state.searchReducer
  );

  const { favoriteMovies } = useSelector(state => state.favoritesReducer);

  // clicking on the search button will always request the first page of whatever the query is, which is 1
  const handleSearchClick = movieTitle =>
    dispatch(findMoviesByTitleStart(movieTitle, 1, favoriteMovies));

  const handlePaginationClick = selectedPage => {
    if (selectedPage !== currentPage) {
      dispatch(findMoviesByTitleStart(queryMovieTitle, selectedPage, favoriteMovies));
    }
  };

  const handleRateMovieClick = movie => {
    setMovie(movie);
    setShowAddFavoriteModal(true);
  };

  const handleModalClose = () => {
    setMovie({});
    setShowAddFavoriteModal(false);
  };

  const handleModalSubmit = (movie, review) => {
    const movieWithReview = {
      imdbID: movie.imdbID,
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster,
      rating: review.rating,
      review: review.review
    };

    dispatch(addFavoriteStart(movieWithReview));
    dispatch(favoriteCreatedStart(movieWithReview, movies));

    handleModalClose();
  };

  // omdbapi seems to not return more than 10 movies per page. Does not appear to be configurable
  const maxTotalMoviesPerPage = 10;

  // show pagination control only if there are movie items in the movies array
  const showPagination = !!(movies && movies.length > 0);

  const isFavoriteMovie = !!(movie && movie.rating && movie.review);

  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          {isFavoriteMovie && (
            <MovieReviewViewerModal
              movie={movie}
              show={showAddFavoriteModal}
              onClose={handleModalClose}
              onSubmit={handleModalSubmit}
            />
          )}
          {!isFavoriteMovie && (
            <MovieReviewEditorModal
              movie={movie}
              show={showAddFavoriteModal}
              onClose={handleModalClose}
              onSubmit={handleModalSubmit}
            />
          )}
          <div className="text-center">
            <h2>It's Time For Reel Reviews!</h2>
          </div>
          <br />
          <TitleSearch onSeachClick={handleSearchClick} />
          <br />
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 10, offset: 1 }}>
          <MovieCardGrid
            movies={movies}
            onRateMovieClick={handleRateMovieClick}
            isReadOnly={true}
          />
          <br />
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          {showPagination && (
            <PaginationComponent
              totalItems={totalResults}
              pageSize={maxTotalMoviesPerPage}
              activePage={currentPage}
              onSelect={handlePaginationClick}
            />
          )}
          {friendlyErrorMessage && <ErrorMessagePanel errorMessage={friendlyErrorMessage} />}
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
