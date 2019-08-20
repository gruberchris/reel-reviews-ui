import React, { useState, useEffect } from 'react';
import {
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
import './MovieReviewEditorModal.css';

const MovieReviewEditorModal = ({ show, movie, onClose, onSubmit }) => {
  const initialStateValue = { rating: '', review: '' };
  const [values, setValues] = useState(initialStateValue);

  useEffect(() => {
    setValues({
      rating: movie.rating ? movie.rating : initialStateValue.rating,
      review: movie.review ? movie.review : initialStateValue.review
    });
  }, [initialStateValue.rating, initialStateValue.review, movie.rating, movie.review]);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(movie, { rating: values.rating, review: values.review });
    setValues(initialStateValue);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleRatingChange = e => {
    const { value } = e.target;
    const parsedRating = value ? parseInt(value) : initialStateValue.rating;
    setValues({ ...values, rating: parsedRating });
  };

  const handleCloseClick = () => {
    setValues(initialStateValue);
    onClose();
  };

  const isFormClean = () => {
    if (!(movie.rating && movie.review)) {
      // not an existing favorite
      return false;
    }

    return movie.rating === values.rating && movie.review.localeCompare(values.review) === 0;
  };

  const isSaveButtonDisabled = isFormClean();

  return (
    <Modal isOpen={show} toggle={onClose}>
      <ModalHeader toggle={onClose}>
        <strong>{`${movie.Title} (${movie.Year})`}</strong>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label sm={{ size: 10, offset: 1 }} for="ratingInput">
              Your Movie Rating
            </Label>
            <Col sm={{ size: 10, offset: 1 }}>
              <Input
                id="ratingInput"
                name="rating"
                type="number"
                placeholder="How many stars would you rate this movie?"
                value={values.rating}
                onChange={handleRatingChange}
              />
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
                value={values.review}
                onChange={handleInputChange}
              />
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
