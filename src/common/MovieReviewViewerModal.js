import React from 'react';
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

const MovieReviewViewerModal = ({ show, movie, onClose }) => (
  <Modal isOpen={show} toggle={onClose}>
    <ModalHeader toggle={onClose}>
      <strong>{`${movie.Title} (${movie.Year})`}</strong>
    </ModalHeader>
    <ModalBody>
      <Form>
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
              value={movie.rating}
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
              value={movie.review}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={{ size: 'auto', offset: 9 }}>
            <Button color="primary" onClick={onClose}>
              Close
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </ModalBody>
  </Modal>
);

export default MovieReviewViewerModal;
