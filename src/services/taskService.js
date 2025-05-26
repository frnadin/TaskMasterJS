// services/taskService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const TASK_STORAGE_KEY = '@tasks';

const mockTasks = [
  { id: "1", title: "Tela de Login", completed: true },
  { id: "2", title: "Finalizar o protótipo", completed: true },
  { id: "3", title: "Enviar para a MXM", completed: true },
  { id: "4", title: "Desenvolvimento utilizando React Native", completed: false },
  { id: "5", title: "Gerenciamento de estado com Context API", completed: true },
  { id: "6", title: "Navegação com React Navigation", completed: true },
];

// Função para carregar as tarefas do AsyncStorage
export const loadTasksService = async () => {
  const storedTasks = await AsyncStorage.getItem(TASK_STORAGE_KEY);
  if (storedTasks) return JSON.parse(storedTasks);

  await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(mockTasks));
  return mockTasks;
};

// Função para salvar a lista de tarefas atualizada no AsyncStorage
export const saveTasksService = async (tasks) => {
  await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
};
