export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';
export const GET_PROFILE = 'GET_PROFILE';
export const SET_PROFILE = 'SET_PROFILE';
export const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: { ...action.user } };
    case GET_USER:
      return state.user;
    case SET_PROFILE:
      return { ...state, profile: { ...action.profile } };
    case GET_PROFILE:
      return state.profile;
    default:
      return state;
  }
};
