// services/taskService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const TASK_STORAGE_KEY = '@tasks';

const mockTasks = [
  { id: "1", title: "Tela de Login", completed: true },
  { id: "2", title: "Finalizar o protótipo", completed: false },
  { id: "3", title: "Enviar para a MXM", completed: false },
];

export const loadTasksService = async () => {
  const storedTasks = await AsyncStorage.getItem(TASK_STORAGE_KEY);
  if (storedTasks) return JSON.parse(storedTasks);

  await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(mockTasks));
  return mockTasks;
};

export const saveTasksService = async (tasks) => {
  await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
};
