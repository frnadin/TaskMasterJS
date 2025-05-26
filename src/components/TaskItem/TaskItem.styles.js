import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';


export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.border};
`;

export const TaskText = styled.Text`
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  text-decoration-line: ${({ completed }) => (completed ? "line-through" : "none")};
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Button = styled(TouchableOpacity)`
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.button};
`;
