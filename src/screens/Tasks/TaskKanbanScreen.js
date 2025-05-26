import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { TaskContext } from "../../contexts/TaskContext";
import {
  KanbanContainer,
  ColumnsWrapper,
  Column,
  ColumnTitle,
  TaskCard,
  TaskDone,
  TaskText,
  EmptyText,
} from "./TaskKanbanScreen.styles";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; 

export default function TaskKanbanScreen() {
  const navigation = useNavigation();
  const { tasks, updateTask } = useContext(TaskContext);

  const notDoneTasks = tasks.filter((t) => !t.completed);
  const doneTasks = tasks.filter((t) => t.completed);

  const toggleTaskStatus = (task) => {
    updateTask(task.id, { ...task, completed: !task.completed });
  };

  const renderTask = (item, isDone) => {
    const Card = isDone ? TaskDone : TaskCard;
    return (
      <Card onPress={() => toggleTaskStatus(item)}>
        <TaskText>{item.title}</TaskText>
      </Card>
    );
  };

  return (
    <KanbanContainer>
       <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          bottom: 20, 
          left: 30,
          zIndex: 10,
          padding: 10,
          backgroundColor: "#333", 
          borderRadius: 20, 
        }}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
      <ColumnsWrapper>
        <Column>
          <ColumnTitle>To do</ColumnTitle>
          <FlatList
            data={notDoneTasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => renderTask(item, false)}
            ListEmptyComponent={<EmptyText>No tasks here.</EmptyText>}
          />
        </Column>

        <Column>
          <ColumnTitle>Done</ColumnTitle>
          <FlatList
            data={doneTasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => renderTask(item, true)}
            ListEmptyComponent={<EmptyText>Nothing completed yet.</EmptyText>}
          />
        </Column>
      </ColumnsWrapper>
    </KanbanContainer>
  );
}
