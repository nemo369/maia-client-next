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

export const getChartColors = (id) => {
  const colors = {
    a: '#6c6c6c',
    b: '#577590',
    c: '#007a87',
    d: '#43aa8b',
    e: '#00a7cb',
    f: '#90be6d',
    g: '#f9c74f',
    h: '#f9844a',
    i: '#10abb7',
    j: '#f3722c',
    k: '#f94144',
    l: '#f2cc8f',
    m: '#ffafcc',
    n: '#fee440',
    o: '#b5e48c',
    p: '#dda15e',
    q: '#edf6f9',
    r: '#98e1cd',
    s: '#252468',
    t: '#A8DFCE',
    u: '#b6ccfe',
    v: '#f3e7e4',
    w: '#55a630',
    x: '#3e1f47',
    y: '#ef233c',
    z: '#ff9f1c',
  };
  if (colors[id]) {
    return colors[id];
  }

  return '#000000';
};
