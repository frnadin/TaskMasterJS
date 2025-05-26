import AsyncStorage from "@react-native-async-storage/async-storage";

// Gera um token random simples
function generateToken() {
  return Math.random().toString(36).substr(2) + Date.now().toString(36);
}

export const loginService = async (email, password) => {
  // Simula uma requisição de login (pode ser adaptado para API real)
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simula delay de 1 segundo (1000ms)
      const user = { email };
      const token = generateToken();

      // Salva usuário e token no AsyncStorage em formato string
      AsyncStorage.setItem("user", JSON.stringify(user));
      AsyncStorage.setItem("token", token);
      console.log("TOKEN: ", token); // para debug apenas

      resolve({ success: true, user }); // resolve a Promise
    }, 1000);
  });
};

export const registerService = async (email, name, password) => {
  // Simula uma requisição de registro de usuário
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
