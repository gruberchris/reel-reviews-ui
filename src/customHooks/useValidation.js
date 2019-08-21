import { useState, useEffect } from 'react';

const useValidation = (onValidate, onValidated, initValues) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onValidated();
      clearState();
    }
  }, [onValidated, errors, isSubmitting]);

  useEffect(() => {
    setValues(initValues);
  }, [initValues]);

  const handleChange = event => {
    event.persist();

    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }

    setErrors(onValidate(values));
    setIsSubmitting(true);
  };

  const clearState = () => {
    setValues({});
    setErrors({});
    setIsSubmitting(false);
  };

  const initState = initValues => {
    Object.keys(initValues).map(key =>
      setValues(values => ({ ...values, [key]: initValues[key] }))
    );
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    clearState,
    initState
  };
};

export default useValidation;
