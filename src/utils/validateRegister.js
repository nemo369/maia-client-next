export const validateRegister = (inputs) => {
  const errors = {};
  let isValid = true;
  Object.entries(inputs).forEach(([key, value]) => {
    errors[key] = false;

    switch (key) {
      case 'firstName':
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
