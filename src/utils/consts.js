export const FRONT_URL = process.env.NEXT_PUBLIC_FORNT_ENDPOINT;
export const LOGIN_TYPE_LS = 'Login Type';
export const DASHBOARD_TYPE_CATEGORY = 'Dashbaord Type Category';
export const USER_COOKIE = 'user-cookie/v1';
export const getChartColors = (id) => {
  const colors = {
    a: '#277da1',
    b: '#577590',
    c: '#4d908e',
    d: '#43aa8b',
    e: '#90be6d',
    f: '#90be6d',
    g: '#f9c74f',
    h: '#f9844a',
    i: '#f8961e',
    j: '#f3722c',
    k: '#f94144',
    l: '#f2cc8f',
    m: '#ffafcc',
    n: '#fee440',
    o: '#b5e48c',
    p: '#dda15e',
    q: '#edf6f9',
    r: '#e29578',
    s: '#415a77',
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
