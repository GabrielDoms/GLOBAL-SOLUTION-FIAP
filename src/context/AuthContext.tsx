import React, { useContext } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem("token");

    return storedToken;
  });

  function login(token: string) {
    localStorage.setItem("token", token);
  }

  function logout() {
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ token, setToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
