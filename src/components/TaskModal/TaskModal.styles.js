import styled from "styled-components/native";

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContainer = styled.View`
  width: 90%;
  background-color: #2c2c2e;
  border-radius: 12px;
  padding: 24px;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 12px;
  border: 1px solid #555;
  border-radius: 8px;
  color: #fff;
  margin-bottom: 16px;
`;

export const AddTaskButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${(props) => props.theme.button};
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 12px;
`;
export const AddTaskButtonText = styled.Text`
  color: ${(props) => props.theme.text};
  font-weight: bold;
  font-size: 16px;
`;

export const CancelText = styled.Text`
  color: #ff3b30;
  font-size: 16px;
`;
