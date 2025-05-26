import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../contexts/AuthContext';
import LoginScreen from '../screens/Auth/Login/LoginScreen';
import RegisterScreen from '../screens/Auth/Register/RegisterScreen';
import TaskListScreen from '../screens/Tasks/TaskListScreen';
import TaskKanbanScreen from '../screens/Tasks/TaskKanbanScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // return null; // IPLEMENTAR UM LOADING SCREEN AQUI
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Tasks" component={TaskListScreen}   options={{ title: "List" }} />
            <Stack.Screen name="TasksKanban" component={TaskKanbanScreen}  options={{ title: "Kanban" }}/>
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen}   options={{ title: "Login" }}/>
            <Stack.Screen name="Register" component={RegisterScreen}   options={{ title: "Register" }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
