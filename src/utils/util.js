export const upperCase = (str) => str?.toUpperCase();
export const trimText = (str, length = 64) => {
  if (str.length < length) {
    return str;
  }
  return `${str.substring(0, length - 3)}...`;
};
