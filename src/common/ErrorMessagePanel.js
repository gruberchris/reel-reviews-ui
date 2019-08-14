import React from 'react';
import './ErrorMessagePanel.css';

const ErrorMessagePanel = ({ errorMessage }) => (
  <div className="error-message">
    <span className="error-text">{errorMessage}</span>
  </div>
);

export default ErrorMessagePanel;
