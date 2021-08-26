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
    const value = Number(e.target.value);
    const { name } = e.target;
    if (e.target.checked) {
      setInputs({
        // copy the existing state
        ...inputs,
        [name]: [...inputs[name], value],
      });
    } else {
      setInputs({
        // copy the existing state
        ...inputs,
        [name]: inputs[name].filter((input) => input !== value),
      });
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
