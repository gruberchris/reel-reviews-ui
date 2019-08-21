import React from 'react';
import { Alert } from 'reactstrap';

const InfoMessagePanel = ({ message }) => (
  <Alert color="info">
    <span dangerouslySetInnerHTML={{ __html: message }}></span>
  </Alert>
);

export default InfoMessagePanel;
