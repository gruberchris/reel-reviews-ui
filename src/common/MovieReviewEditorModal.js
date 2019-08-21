import React from 'react';
import {
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import useValidation from '../customHooks/useValidation';
import './MovieReviewEditorModal.css';

const MovieReviewEditorModal = ({ show, movie, onClose, onSubmit }) => {
  const onValidate = values => {
    let errors = {};

    if (!values.rating) {
      errors.rating = 'Movie rating is required';
    } else if (values.rating > 10 || values.rating < -10) {
      errors.rating = 'Movie rating must be between -10 and 10';
    }

    if (!values.review) {
      errors.review = 'Movie review is required';
    }

    return errors;
  };

  const onValidated = () => onSubmit(movie, { rating: values.rating, review: values.review });

  const { values, errors, handleChange, handleSubmit, clearState } = useValidation(
    onValidate,
    onValidated,
    movie
  );

  const handleCloseClick = () => {
    onClose();
    clearState();
  };

  const isFormClean = () => {
    if (!(movie.rating && movie.review)) {
      // not an existing favorite
      return false;
    }

    return movie.rating === values.rating && movie.review.localeCompare(values.review) === 0;
  };

  const isSaveButtonDisabled = isFormClean();
  const isReviewInputValid = !!(!errors.review && values.review && values.review !== movie.review);
  const parsedRating = parseInt(values.rating);
  const isRatingInputValid =
    !errors.rating && (parsedRating < 11 && parsedRating > -11 && parsedRating !== movie.rating);

  return (
    <Modal isOpen={show} toggle={onClose}>
      <ModalHeader toggle={onClose}>
        <strong>{`${movie.Title} (${movie.Year})`}</strong>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit} noValidate>
          <FormGroup row>
            <Label sm={{ size: 10, offset: 1 }} for="ratingInput">
              Your Movie Rating
            </Label>
            <Col sm={{ size: 10, offset: 1 }}>
              <Input
                id="ratingInput"
                name="rating"
                type="number"
                color={errors.rating ? 'danger' : null}
                placeholder="How many stars would you rate this movie?"
                value={values.rating || ''}
                onChange={handleChange}
                required
                invalid={!!errors.rating}
                valid={isRatingInputValid}
                min="-10"
                max="10"
                step="1"
              />
              {errors.rating && (
                <Alert className="input-error-message" color="danger">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  {'     ' + errors.rating}
                </Alert>
              )}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={{ size: 10, offset: 1 }} for="reviewInput">
              Your Movie Review
            </Label>
            <Col sm={{ size: 10, offset: 1 }}>
              <Input
                id="reviewInput"
                name="review"
                type="textarea"
                rows="5"
                placeholder="What do you have to say about this movie?"
                value={values.review || ''}
                onChange={handleChange}
                required
                invalid={!!errors.review}
                valid={isReviewInputValid}
              />
              {errors.review && (
                <Alert className="input-error-message" color="danger">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  {'     ' + errors.review}
                </Alert>
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={{ size: 'auto', offset: 7 }}>
              <Button className="danger-button" color="danger" onClick={handleCloseClick}>
                Cancel
              </Button>
              {'   '}
              <Button
                className="primary-button"
                color="primary"
                type="submit"
                disabled={isSaveButtonDisabled}
              >
                Save
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default MovieReviewEditorModal;
