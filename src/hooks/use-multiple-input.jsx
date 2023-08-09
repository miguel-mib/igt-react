import { useState } from "react";

const useMultipleInput = (validateFunction) => {
  const [valuesArray, setValuesArray] = useState([""]);
  const [isTouchedArary, setIsTouchedArary] = useState([false]);

  const isValidArray = valuesArray.map((value) => validateFunction(value));

  const hasErrorArray = valuesArray.map((value, index) => {
    const isValid = isValidArray[index];
    const isTouched = isTouchedArary[index];

    return !isValid && isTouched;
  });

  const addValueHandle = () => {
    setValuesArray((prevArray) => [...prevArray, ""]);
  };

  const inputBlurHandle = (index) => {
    const newIsTouchedArary = [...isTouchedArary];
    newIsTouchedArary[index] = true;
    setIsTouchedArary(newIsTouchedArary);
  };

  const valueChangeHandle = (index, value) => {
    const newValuesArray = [...valuesArray];
    newValuesArray[index] = value;
    setValuesArray(newValuesArray);
  };

  const reset = () => {
    setValuesArray([""]);
    setIsTouchedArary([false]);
  };

  return {
    addValueHandle,
    valueChangeHandle,
    inputBlurHandle,
    valuesArray,
    isValidArray,
    hasErrorArray,
    reset,
  };
};

export default useMultipleInput;
