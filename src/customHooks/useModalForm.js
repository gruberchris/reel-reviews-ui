import { useState } from 'react';

const useModalForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }

    // TODO: validation logic could go here

    callback(inputs);

    // clear local state as modal is reused
    setInputs(() => ({}));
  };

  const handleInputChange = event => {
    event.persist();

    setInputs(state => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useModalForm;
