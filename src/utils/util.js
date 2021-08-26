export const upperCase = (str) => str?.toUpperCase();
export const trimText = (str, length = 64) => {
  if (!str) {
    return str;
  }
  const strippedString = str.replace(/(<([^>]+)>)/gi, '');
  if (strippedString.length < length) {
    return strippedString;
  }

  return `${strippedString.substring(0, length - 3)}...`;
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
export const getProfileDesc = (proifle) => {
  function getDesc(s) {
    switch (s) {
      case 's':
        return 'חברתי';
      case 'c':
        return 'חברתי';
      case 'e':
        return 'חברתי';

      default:
        return '';
    }
  }
  let str = '*';
  str += getDesc(proifle.mainField);
  str += '-';
  str += getDesc(proifle.secondField);
  str += '-';
  str += getDesc(proifle.thirdField);
  return str;
};
