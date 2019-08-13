import React, { useState } from 'react';
import MovieCardGrid from '../common/MovieCardGrid';
import { Col, Container, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import MovieReviewEditorModal from '../common/MovieReviewEditorModal';
import {
  updateFavoriteStart,
  deleteFavoriteStart
} from '../store/actions/favoritesActions';

const Favorites = () => {
  const [showAddFavoriteModal, setShowAddFavoriteModal] = useState(false);
  const [movie, setMovie] = useState({});
  const dispatch = useDispatch();

  const { favoriteMovies, friendlyErrorMessage } = useSelector(
    state => state.favoritesReducer
  );

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
      ...movie,
      ...review
    };

    dispatch(updateFavoriteStart(movieWithReview, favoriteMovies));

    handleModalClose();
  };

  const handleDeleteReviewClick = movie =>
    dispatch(deleteFavoriteStart(movie, favoriteMovies));

  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <MovieReviewEditorModal
            movie={movie}
            show={showAddFavoriteModal}
            onClose={handleModalClose}
            onSubmit={handleModalSubmit}
          />
          <div className="text-center">
            <h2>Your Reviewed Favorites</h2>
          </div>
          <br />
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 10, offset: 1 }}>
          <MovieCardGrid
            movies={favoriteMovies}
            onRateMovieClick={handleRateMovieClick}
            onDeleteReviewClick={handleDeleteReviewClick}
            isReadOnly={false}
          />
          <br />
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <div>{friendlyErrorMessage}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
