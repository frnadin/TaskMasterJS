import React, { useContext, useEffect, useState } from "react";
import { Platform } from "react-native";
import Toast from "react-native-toast-message";
import { Container, Content, ForgotPasswordLink } from "./LoginScreen.styles";
import { AuthContext } from "../../../contexts/AuthContext";
import Input from "../../../components/Input/Input";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import LinkButton from "../../../components/LinkButton/LinkButton";

export default function LoginScreen({ navigation }) {
  const { login, loading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

useEffect(() => {
  const unsubscribe = navigation.addListener("focus", () => {
    setEmail("");
    setPassword("");
  });
  return unsubscribe;
}, [navigation]);

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Please enter email and password",
        position: "top",
      });
      return;
    }

    try {
      const result = await login(email, password);
      if (result.success) {
        Toast.show({
          type: "success",
          text1: "Login successful!",
          position: "top",
          visibilityTime: 500,
        });
        setTimeout(() => {
          navigation.navigate("Tasks");
        }, 3000);
      } else {
        Toast.show({
          type: "error",
          text1: "Invalid email or password",
          position: "top",
          visibilityTime: 1500,
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Login failed. Try again later.",
        position: "top",
        visibilityTime: 1500,
      });
      console.error("Login failed", error);
    }
  };

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Content>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <PrimaryButton
          title={loading ? "Logging in..." : "Login"}
          onPress={handleLogin}
          disabled={loading}
        />

        <LinkButton onPress={() => navigation.navigate("Register")}>
          Don't have an account? Register
        </LinkButton>

        <ForgotPasswordLink
          onPress={() => console.log("Forgot Password pressed")}
        >
          Forgot Password?
        </ForgotPasswordLink>
      </Content>
    </Container>
  );
}
