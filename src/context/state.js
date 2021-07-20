import { createContext, useContext, useReducer } from 'react';
import { appReducer } from './appReducer';

export const AppContext = createContext();
export function AppWrapper({ children, userProp }) {
  const initializer = {
    user: userProp,
    profile: null,
    notifications: [],
  };
  const [{ user, profile, notifications }, dispatch] = useReducer(appReducer, initializer);
  const sharedState = {
    user,
    profile,
    notifications,
    dispatch,
  };
  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
