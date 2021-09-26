import {
  DASHBOARD_TYPE_CATEGORY,
  LOGIN_TYPE_LS,
  IS_WALKME,
  IS_FAVORITE,
  IS_HELP_POPPED,
} from './consts';

const defaultLs = {
  [LOGIN_TYPE_LS]: 'email',
  [DASHBOARD_TYPE_CATEGORY]: { name: 'מקצועות', id: 'professions' },
  [IS_WALKME]: true,
  [IS_FAVORITE]: true,
  [IS_HELP_POPPED]: false,
};

export const getLs = (key = null) => {
  const savedLs = process.browser ? JSON.parse(localStorage.getItem('maya-localstorage-v1')) : {};
  const ls = {
    ...defaultLs,
    ...savedLs,
  };

  if (!key || !Object.prototype.hasOwnProperty.call(ls, key)) {
    return ls;
  }
  return ls[key];
};

export const setLs = (key, value) => {
  const savedLs = getLs();
  const newLs = {
    ...savedLs,
    [key]: value,
  };
  if (process.browser) {
    localStorage.setItem('maya-localstorage-v1', JSON.stringify(newLs));
  }
  return newLs;
};
