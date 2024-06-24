import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

let storedUser = localStorage.getItem("user");
let currentUser = null;

if (storedUser) {
  try {
    currentUser = JSON.parse(storedUser);
  } catch (error) {
    console.error("Failed to parse user JSON from localStorage:", error);
    localStorage.removeItem("user");
  }
}

const INITIAL_STATE = {
  currentUser,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
