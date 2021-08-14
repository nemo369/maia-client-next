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

export const getGreeting = () => {
  const hour = new Date().getHours();
  let greet = 'בוקר טוב';
  switch (true) {
    case 12 < hour && 18 > hour:
      greet = 'צהריים טובים';
      break;
    case 18 < hour && 22 > hour:
      greet = 'ערב טוב';
      break;
    case 22 < hour && 24 > hour:
      greet = 'לילה טוב';
      break;
    default:
      break;
  }
  return greet;
};
