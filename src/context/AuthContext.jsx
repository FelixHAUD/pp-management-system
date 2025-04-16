import { createContext, useContext, useState } from "react";

// Possible roles: "admin", "manager", "employee", "customer"
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user = { name, role }

  const login = (name, role) => {
    setUser({ name, role });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
