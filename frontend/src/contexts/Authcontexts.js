// AuthContext.js
import React, { createContext, useState } from 'react';
import { useContext } from 'react';
const AuthenticationContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [auth, setAuth] = useState(false);  
  return (
    <AuthenticationContext.Provider value={{  auth, setAuth }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext=()=>{
  return useContext(AuthenticationContext)
}
