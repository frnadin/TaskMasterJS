import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Container, TaskText, Button, ButtonGroup } from './TaskItem.styles';


export default function TaskItem({ task, onToggleComplete, onEdit, onDelete }) {
  return (
    <Container>
      <TaskText completed={task.completed}>{task.title}</TaskText>

      <ButtonGroup>
        <Button onPress={onToggleComplete}>
          <Ionicons
            name={task.completed ? "checkmark-circle" : "ellipse-outline"}
            size={24}
            color="white"
          />
        </Button>

        <Button onPress={onEdit}>
          <Ionicons name="pencil" size={24} color="white" />
        </Button>

        <Button onPress={onDelete}>
          <Ionicons name="trash" size={24} color="white" />
        </Button>
      </ButtonGroup>

    </Container>
  );
}
