import styled from "styled-components/native";

// Container 
export const KanbanContainer = styled.View`
  flex: 1;
  background-color: #121212;
  padding: 50px;
  paddingBottom: 80px;
`;

// Wrapper 
export const ColumnsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

// coluna
export const Column = styled.View`
  flex: 1;
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 22px;
  margin-right: 8px;
`;


// Título 
export const ColumnTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 12px;
  text-align: center;
`;

// Card 
export const TaskCard = styled.TouchableOpacity`
  background-color: #333;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 10px;
  justify-content: center; 
  align-items: center;      
  flex: 1;
`;

// Card concluído
export const TaskDone = styled(TaskCard)`
  background-color: #4cd964;
`;

// Texto 
export const TaskText = styled.Text`
  color: white;
  font-size: 16px;
`;

// text lista vazia
export const EmptyText = styled.Text`
  color: #777;
  font-style: italic;
  text-align: center;
  margin-top: 20px;
`;

export const ButtonList = styled.TouchableOpacity`
  color: #777;
  font-style: italic;
  text-align: center;
  margin-top: 20px;
`;