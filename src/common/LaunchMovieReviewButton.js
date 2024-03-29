import React, { useState } from 'react';
import { Button, ButtonGroup, Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import './LaunchMovieReviewButton.css';

const LaunchMovieReviewButton = ({ movie, isReadOnly, onRateMovieClick, onDeleteReviewClick }) => {
  const [showDeleteTooltip, setShowDeleteTooltip] = useState(false);
  const [showEditTooltip, setShowEditTooltip] = useState(false);

  if (movie.rating || movie.review) {
    if (isReadOnly) {
      return (
        <Button className="success-button" color="success" onClick={() => onRateMovieClick(movie)}>
          <FontAwesomeIcon icon={faBookReader} /> Read Review
        </Button>
      );
    }

    return (
      <ButtonGroup size="lg">
        <Button
          id={`deleteMovieButton${movie.imdbID}`}
          className="danger-button"
          color="danger"
          onClick={() => onDeleteReviewClick(movie)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Tooltip
          target={`deleteMovieButton${movie.imdbID}`}
          placement="top"
          isOpen={showDeleteTooltip}
          toggle={() => setShowDeleteTooltip(!showDeleteTooltip)}
        >
          Delete movie review
        </Tooltip>
        <Button
          id={`editMovieButton${movie.imdbID}`}
          className="success-button"
          color="success"
          onClick={() => onRateMovieClick(movie)}
        >
          <FontAwesomeIcon icon={faBookReader} />
        </Button>
        <Tooltip
          target={`editMovieButton${movie.imdbID}`}
          placement="top"
          isOpen={showEditTooltip}
          toggle={() => setShowEditTooltip(!showEditTooltip)}
        >
          Read or change movie review
        </Tooltip>
      </ButtonGroup>
    );
  }

  return (
    <Button className="primary-button" color="primary" onClick={() => onRateMovieClick(movie)}>
      <FontAwesomeIcon icon={faStar} /> Rate & Review
    </Button>
  );
};

export default LaunchMovieReviewButton;
