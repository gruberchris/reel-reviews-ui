import React from 'react';
import MovieCardGrid from '../common/MovieCardGrid';
import { Col, Container, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

const Favorites = () => {
  const dispatch = useDispatch();

  const { favoriteMovies, friendlyErrorMessage } = useSelector(
    state => state.favoritesReducer
  );

  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <div className="text-center">
            <h2>Favorite Movies With Ratings & Reviews</h2>
          </div>
          <br />
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 10, offset: 1 }}>
          <MovieCardGrid movies={favoriteMovies} />
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
