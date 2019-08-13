import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import LaunchMovieReviewButton from './LaunchMovieReviewButton';
import './MovieCard.css';

const MovieCard = ({
  movie,
  onRateMovieClick,
  onDeleteReviewClick,
  isReadOnly
}) => {
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
          <LaunchMovieReviewButton
            movie={movie}
            isReadOnly={isReadOnly}
            onRateMovieClick={onRateMovieClick}
            onDeleteReviewClick={onDeleteReviewClick}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;
