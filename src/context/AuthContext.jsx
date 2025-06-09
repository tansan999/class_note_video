import React, { createContext, useState, useEffect } from 'react';
import { auth, signInWithPopup, provider, signOut } from '../firebase';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(setUser);
    return unsub;
  }, []);

  const login = () => signInWithPopup(auth, provider);
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
