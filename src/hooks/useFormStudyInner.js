import { useEffect, useState } from 'react';

export default function useFormStudyInner(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');
  useEffect(() => {
    // This function runs when the things we are watching change
    setInputs(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  function handleChange(e) {
    const { value } = e.target;
    const { name } = e.target;
    if (!inputs?.categories.includes(value)) {
      setInputs({
        ...inputs,
        [name]: [...inputs[name], value],
      });
    }
    if (inputs?.categories.includes(value)) {
      const index = inputs.categories.indexOf(value);
      inputs?.categories.splice(index, 1);
    }
    console.log(inputs);
    if (4 < inputs.categories.length) {
      // setInputs({ ...inputs.categories.reverse().slice(0, 4) });
    }
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key]) => [key, '']));
    setInputs(blankState);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
