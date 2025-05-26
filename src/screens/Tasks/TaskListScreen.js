import React, { useContext, useState } from "react";
import {
  FlatList,
  Modal,
  TouchableOpacity,
  Button,
  Text,
  View,
} from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { TaskContext } from "../../contexts/TaskContext";
import TaskItem from "../../components/TaskItem/TaskItem";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Container,
  UserText,
  AddButton,
  AddButtonText,
  ModalBackground,
  ModalContainer,
  Input,
  AddTaskButton,
  AddTaskButtonText,
  CancelText,
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
  const [newTitle, setNewTitle] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const openAddModal = () => {
    setEditingTask(null);
    setModalVisible(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setModalVisible(true);
  };

  const handleSubmit = (title) => {
    if (editingTask) {
      updateTask(editingTask.id, { ...editingTask, title });
    } else {
      addTask({ title, completed: false });
    }
    setModalVisible(false);
  };

  const handleToggleComplete = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      updateTask(taskId, { ...task, completed: !task.completed });
    }
  };

  const handleEditTask = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      openEditModal(task);
    }
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleAddTask = () => {
    if (newTitle.trim() === "") return;
    addTask({ title: newTitle, completed: false });
    setNewTitle("");
    setModalVisible(false);
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
