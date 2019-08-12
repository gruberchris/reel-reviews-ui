import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './MovieCard.css';

const MovieCard = ({ movie, onRateMovieClick }) => {
  return (
    <div>
      <Card body className="text-center">
        <CardImg
          top
          alt="movie poster"
          src={movie.Poster}
          className="movie-poster"
        />
        <CardBody>
          <CardTitle>
            {movie.Title} ({movie.Year})
          </CardTitle>
          <Button color="primary" onClick={() => onRateMovieClick(movie)}>
            <FontAwesomeIcon icon={faStar} /> Rate & Review
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;
