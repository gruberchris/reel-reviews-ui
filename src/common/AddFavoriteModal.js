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
import { useModalForm } from '../customHooks';

const AddFavoriteModal = ({ show, movie, onClose, onSubmit }) => {
  const { inputs, handleInputChange, handleSubmit } = useModalForm(inputs =>
    onSubmit(movie, inputs)
  );

  return (
    <Modal isOpen={show} toggle={onClose}>
      <ModalHeader toggle={onClose}>
        Rate, Review & Create A Favorite
      </ModalHeader>
      <ModalBody>
        <div>
          <h4>{`${movie.Title} (${movie.Year})`}</h4>
        </div>
        <br />
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
                onChange={handleInputChange}
                value={inputs.rating || ''}
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
                onChange={handleInputChange}
                value={inputs.review || ''}
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

export default AddFavoriteModal;
