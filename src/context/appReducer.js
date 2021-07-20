export const SET_USER = 'SET_USER';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
export const appReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case SET_USER:
      return { ...state, user: { ...action.user } };
    case SET_NOTIFICATIONS:
      return { ...state, notifications: [...action.notifications] };
    case SET_PROFILE:
      return { ...state, profile: { ...action.profile } };
    default:
      return state;
  }
};
