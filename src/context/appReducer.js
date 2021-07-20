export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';
export const GET_PROFILE = 'GET_PROFILE';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
export const GET_NOTIFICATION = 'GET_NOTIFICATION';
export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: { ...action.user } };
    case SET_NOTIFICATIONS:
      return { ...state, notifications: { ...action.notifications } };
    case SET_PROFILE:
      return { ...state, profile: { ...action.profile } };
    default:
      return state;
  }
};
