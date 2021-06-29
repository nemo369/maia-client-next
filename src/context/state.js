import { createContext, useContext, useReducer } from 'react';
import { userReducer } from './userReucder';

export const AppContext = createContext();

export function AppWrapper({ children, userProp }) {
  const [{ user, profile }, dispatch] = useReducer(userReducer, { user: userProp, profile: null });
  const sharedState = {
    user,
    profile,
    dispatch,
  };
  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
