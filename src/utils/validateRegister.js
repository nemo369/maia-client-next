function validateEmail(email) {
  // eslint-disable-next-line prettier/prettier
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export const validateRegister = (inputs) => {
  const errors = {};
  let isValid = true;
  Object.entries(inputs).forEach(([key, value]) => {
    errors[key] = false;

    switch (key) {
      case 'cityData':
        if (!value || !value.id) {
          errors[key] = true;
          isValid = false;
        }
        break;
      case 'theStreet':
        if (!value || !value.id) {
          errors[key] = true;
          isValid = false;
        }
        break;
      case 'firstName':
        if (!value) {
          errors[key] = true;
          isValid = false;
        }
        break;
      case 'lastName':
        if (!value) {
          errors[key] = true;
          isValid = false;
        }
        break;
      case 'cellphone':
        value = value.replace(/-/g, '');
        if (!value || 10 !== value.length || !value.startsWith('05')) {
          errors[key] = true;
          isValid = false;
        }
        break;
      case 'email':
        if (!value || !validateEmail(value)) {
          errors[key] = true;
          isValid = false;
        }
        break;
      case 'birth_year':
        if (!value) {
          errors[key] = true;
          isValid = false;
        }
        break;
      case 'terms_and_conditions':
        if (!value) {
          errors[key] = true;
          isValid = false;
        }
        break;

      default:
        errors[key] = false;
        break;
    }
  });
  return { isValid, errors };
};
// email: false,
// password: false,
// cellphone: false,
// birth_year: false,
// firstName: false,
// lastName: false,
// gender: false,
// employment_coefficient: false,
// terms_and_conditions: false,
