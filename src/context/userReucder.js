export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';
export const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user };
    case GET_USER:
      return state.user;
    default:
      return state;
  }
};
