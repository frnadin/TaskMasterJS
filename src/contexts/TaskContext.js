// contexts/TaskContext.js
import { createContext, useEffect, useState } from "react";
import { loadTasksService, saveTasksService } from "../services/taskService";

export const TaskContext = createContext();

// Provider que vai gerenciar as tasks e passar pros filhos
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const loaded = await loadTasksService();
      setTasks(loaded);
      setLoading(false);
    };
    load();
  }, []);

  // Quando o componente carregar, eu busco as tasks
  useEffect(() => {
    saveTasksService(tasks);
  }, [tasks]);

  // Função pra adicionar uma task nova
  const addTask = (task) => {
    const newTask = { ...task, id: Date.now().toString(), completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  // Atualiza uma task pelo id
  const updateTask = (id, updates) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  };
  // Delete pelo id
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, loading, addTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
