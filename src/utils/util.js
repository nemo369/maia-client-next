export const upperCase = (str) => str?.toUpperCase();
export const trimText = (str, length = 64) => {
  if (!str || str.length < length) {
    return str;
  }
  return `${str.substring(0, length - 3)}...`;
};

export const addOrRemove = ([...array], value) => {
  const index = array.indexOf(value);

  if (-1 === index) {
    array.push(value);
  } else {
    array.splice(index, 1);
  }
  return array;
};
