import { createContext, useContext, useReducer } from 'react';
import { userReducer } from './userReucder';

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [user, dispatch] = useReducer(userReducer, null);
  const sharedState = {
    user,
    dispatch,
  };

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
