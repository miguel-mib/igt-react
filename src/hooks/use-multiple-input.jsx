import { useState } from "react";

const useMultipleInput = (validateFunction) => {
  const defaultValue = {
    value: "",
    isTouched: false,
    isValid: false,
  };
  const [valuesArray, setValuesArray] = useState([defaultValue]);
  valuesArray.forEach(linkObj => {
    linkObj.isValid = validateFunction(linkObj.value)
  })

  const addValueHandle = () => {
    setValuesArray((prevArray) => [...prevArray, defaultValue]);
  };

  const deleteValueHandle = (index) => {
    setValuesArray((prevArray) => {
      const array = [...prevArray]
      array.splice(index, 1);
      return [...array];
    });
  };

  const inputBlurHandle = (index) => {
    setValuesArray((prevArray) => {
      const array = [...prevArray]
      array[index].isTouched = true;
      return [...array];
    });
  };

  const valueChangeHandle = (index, value) => {
    setValuesArray((prevArray) => {
      const array = [...prevArray]
      array[index].value = value;
      return [...array];
    });
  };

  const reset = () => {
    setValuesArray([defaultValue]);
  };

  return {
    addValueHandle,
    valueChangeHandle,
    inputBlurHandle,
    deleteValueHandle,
    valuesArray,
    reset,
  };
};

export default useMultipleInput;
