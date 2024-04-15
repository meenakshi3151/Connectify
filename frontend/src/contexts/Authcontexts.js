// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthenticationContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState('');

  return (
    <AuthenticationContext.Provider value={{ state, setState }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
