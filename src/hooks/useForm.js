import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    // This function runs when the things we are watching change
    setInputs(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  function handleChange(e) {
    let { value } = e.target;
    const { name, type } = e.target;
    // TODO: check for email and password and make refactor to its own function
    // debugger;
    if ('number' === type) {
      value = +value;
    }
    if ('file' === type) {
      [value] = e.target.files;
    }
    if ('checkbox' === type) {
      value = !!value;
    }
    if ('radio' === type) {
      console.log(name);
      console.log(value);
      // value = !!value;
    }

    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
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
