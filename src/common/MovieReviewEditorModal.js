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

const MovieReviewEditorModal = ({ show, movie, onClose, onSubmit }) => {
  const [values, setValues] = useState({ rating: 0, review: '' });

  useEffect(() => {
    setValues({
      rating: movie.rating ? movie.rating : 0,
      review: movie.review ? movie.review : ''
    });
  }, [movie.rating, movie.review]);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(movie, { rating: values.rating, review: values.review });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

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
                onChange={handleInputChange}
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
              <Button color="danger" onClick={onClose}>
                Cancel
              </Button>
              {'   '}
              <Button color="primary" type="submit">
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
