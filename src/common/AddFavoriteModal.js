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
      <ModalHeader toggle={onClose}>Add Favorite</ModalHeader>
      <ModalBody>
        <div>
          <h4>{`${movie.Title} (${movie.Year})`}</h4>
          <p>{movie.shortPlot}</p>
        </div>
        <br />
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label sm={2}>Your Movie Rating</Label>
            <Col sm={10}>
              <Input
                name="rating"
                type="number"
                placeholder="How many stars would you rate this movie?"
                onChange={handleInputChange}
                value={inputs.rating || ''}
                required
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Your Movie Review</Label>
            <Col sm={10}>
              <Input
                name="review"
                type="text"
                placeholder="What do you have to say about this movie?"
                onChange={handleInputChange}
                value={inputs.review || ''}
                required
              />
            </Col>
          </FormGroup>
          <Button onClick={onClose}>Cancel</Button>
          <Button color="success" type="submit">
            Save
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AddFavoriteModal;
