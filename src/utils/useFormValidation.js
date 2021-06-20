import { useState, useCallback } from "react";

function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormCorrect, setIsFormCorrect] = useState(false);

  function handleChange (evt) {
    const input = evt.target;
    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsFormCorrect(input.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormCorrect(newIsValid);
    },
    [setValues, setErrors, setIsFormCorrect]
  );

  return {
    values,
    setValues,
    errors,
    setErrors,
    isFormCorrect,
    setIsFormCorrect,
    handleChange,
    resetForm
  };
}

export default useFormValidation;
