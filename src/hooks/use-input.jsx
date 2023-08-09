import { useState } from "react";

const useInput = (validateFunction) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateFunction(value);
  const hasError = !isValid && isTouched;

  const valueChangeHandle = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandle = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    valueChangeHandle,
    inputBlurHandle,
    reset,
  };
};

export default useInput;
