// services/authService.js
import AsyncStorage from "@react-native-async-storage/async-storage";

function generateToken() {
  return Math.random().toString(36).substr(2) + Date.now().toString(36);
}

export const loginService = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { email };
      const token = generateToken();

      AsyncStorage.setItem("user", JSON.stringify(user));
      AsyncStorage.setItem("token", token);
      console.log("TOKEN: ", token);

      resolve({ success: true, user });
    }, 1000);
  });
};

export const registerService = async (email, name, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { email, name };
      const token = generateToken();

      AsyncStorage.setItem("user", JSON.stringify(user));
      AsyncStorage.setItem("token", token);
      console.log("TOKEN: ", token);
      resolve({ success: true, user });
    }, 1000);
  });
};

export const logoutService = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      AsyncStorage.removeItem("user");
      AsyncStorage.removeItem("token");

      resolve({ success: true });
    }, 1000);
  });
};
