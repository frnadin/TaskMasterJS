import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { TaskContext } from "../../contexts/TaskContext";
import TaskItem from "../../components/TaskItem/TaskItem";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Container,
  UserText,
  AddButton,
  AddButtonText,
  LogoutButton,
  WelcomeContainer,
  ButtonsContainer,
} from "./TaskListScreen.style";

import { useNavigation } from "@react-navigation/native";

import TaskModal from "../../components/TaskModal/TaskModal";

export default function TaskListScreen() {
  const navigation = useNavigation();

  const { user, logout } = useContext(AuthContext);
  const { tasks, updateTask, deleteTask, addTask } = useContext(TaskContext);

  const [isModalVisible, setModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Função para abrir o modal para criar uma nova tarefa
  const openAddModal = () => {
    setEditingTask(null);
    setModalVisible(true);
  };

  // Função para abrir o modal para editar uma tarefa existente
  const openEditModal = (task) => {
    setEditingTask(task);
    setModalVisible(true);
  };

  // Função que trata o envio do formulário do modal (tanto criar quanto editar)
  const handleSubmit = (title) => {
    if (editingTask) {
      updateTask(editingTask.id, { ...editingTask, title });
    } else {
      addTask({ title, completed: false });
    }
    setModalVisible(false);
  };
  // Alterna o status da task
  const handleToggleComplete = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      updateTask(taskId, { ...task, completed: !task.completed });
    }
  };

  // Abre o modal de edição para a tarefa selecionada
  const handleEditTask = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      openEditModal(task);
    }
  };

  // Remove a tarefa selecionada
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <Container>
      <WelcomeContainer>
        <UserText>Welcome {user?.name || user?.email || "user"}</UserText>

        <LogoutButton onPress={logout} activeOpacity={0.7}>
          <MaterialCommunityIcons name="power" size={24} color="#fff" />
        </LogoutButton>
      </WelcomeContainer>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggleComplete={() => handleToggleComplete(item.id)}
            onEdit={() => handleEditTask(item.id)}
            onDelete={() => handleDeleteTask(item.id)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListEmptyComponent={<UserText>No tasks found.</UserText>}
      />

      <ButtonsContainer>
        <TouchableOpacity onPress={() => navigation.navigate("TasksKanban")}>
          <AddButtonText>Kanban</AddButtonText>
        </TouchableOpacity>

        <AddButton onPress={openAddModal}>
          <AddButtonText>+ New Task</AddButtonText>
        </AddButton>
      </ButtonsContainer>

      <TaskModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleSubmit}
        initialTitle={editingTask?.title || ""}
      />
    </Container>
  );
}
