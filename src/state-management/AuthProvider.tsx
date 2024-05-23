import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";
import withLogger from "@/components/WithNameLogging/WithNameLogging";
import { AuthReducer, ActionTypes } from "@/state-management/AuthReducer";

// Define the initial state
const initialState = {
  isUserLoggedIn: false,
};

// Define the context interface
export interface IAuthContext {
  isUserLoggedIn: boolean;
  setUserLoggedIn: () => void;
}

// Create the context with initial state
export const AuthContext = createContext<IAuthContext>({
  ...initialState,
  isUserLoggedIn: false,
  setUserLoggedIn: () => {},
});

// Define the provider component
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Define the actions
  const setUserLoggedIn = useCallback(() => {
    dispatch({ type: ActionTypes.SET_IS_LOGGED_IN, payload: true });
  }, []);

  // Construct the context value
  const value: IAuthContext = {
    ...state,
    setUserLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the PostsContext
export const useAuthContext = () => useContext(AuthContext);

export default withLogger(AuthProvider);
