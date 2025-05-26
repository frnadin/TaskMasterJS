import React, { useState, useEffect } from "react";
import { Modal, TouchableOpacity } from "react-native";
import {
  ModalBackground,
  ModalContainer,
  Input,
  AddTaskButton,
  AddTaskButtonText,
  CancelText,
} from "./TaskModal.styles"; 

export default function TaskModal({
  isVisible,
  onClose,
  onSubmit,
  initialTitle = "",
}) {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    setTitle(initialTitle); 
  }, [initialTitle]);

  const handleSubmit = () => {
    if (title.trim() !== "") {
      onSubmit(title.trim());
      setTitle("");
    }
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <ModalBackground>
        <ModalContainer>
          <Input
            placeholder="Enter task title"
            placeholderTextColor="rgba(255,255,255,0.6)"
            value={title}
            onChangeText={setTitle}
          />

          <AddTaskButton onPress={handleSubmit}>
            <AddTaskButtonText>Save</AddTaskButtonText>
          </AddTaskButton>

          <TouchableOpacity onPress={onClose}>
            <CancelText>Cancel</CancelText>
          </TouchableOpacity>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
}