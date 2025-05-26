import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  loginService,
  registerService,
  logoutService,
} from "../services/authService";

export const AuthContext = createContext();

// Cria o contexto de autenticação
// O AuthProvider é um componente que fornece o contexto de autenticação para todos

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    const result = await loginService(email, password);
    setUser(result.user);
    setToken(result.token);
    setLoading(false);
    return result;
  };

  const register = async (email, name, password) => {
    setLoading(true);
    try {
      const result = await registerService(email, name, password);
      console.log("register result:", result);
      if (result.user) {
        setUser(result.user);
        setToken(result.token);
      }
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      console.error("register error:", error);
      return { success: false };
    }
  };

const logout = async () => {
  try {
    await AsyncStorage.removeItem("user"); 
    setUser(null);
  } catch (err) {
    console.error("Erro ao fazer logout", err);
  } finally {
    setLoading(false);
  }
};


  return (
    <AuthContext.Provider
      value={{ user, token, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
