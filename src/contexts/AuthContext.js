import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        user: action.payload,
      };
    }
    case "LOGOUT": {
      localStorage.setItem("user", null);
      return {
        user: null,
      };
    }
    case "UPDATE": {
      const newUser = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify(newUser));
      return {
        user: newUser,
      };
    }
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(localStorage.getItem("user")),
    });
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
