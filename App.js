import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { AuthProvider } from "./src/contexts/AuthContext";
import AppNavigator from "./src/navigation/AppNavigator";
import { darkTheme } from "./src/styles/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import { TaskProvider } from "./src/contexts/TaskContext";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/toastConfig";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <StyledThemeProvider theme={darkTheme.colors}>
          <AuthProvider>
            <TaskProvider>
              <View style={styles.container}>
                <AppNavigator />
                <StatusBar style="auto" />
              </View>
            </TaskProvider>
          </AuthProvider>
        </StyledThemeProvider>
      </ThemeProvider>
      
      <Toast 
        config={toastConfig}
        topOffset={50}
        visibilityTime={3000}
        autoHide={true}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
