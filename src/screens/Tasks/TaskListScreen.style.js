import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 50px 40px 100px 40px;
`;

export const UserText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

export const ModalBackground = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5); /* escurece o fundo */
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  background-color: #333333; /* mais claro que cardBackground */
  padding: ${({ theme }) => theme.spacing.lg}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  width: 90%;
  max-width: 400px;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const AddTaskButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const AddTaskButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  text-align: center;
`;

export const CancelText = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  color: red; /* pode trocar para tema.colors.link se preferir */
  text-align: center;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button};
  padding: 12px 14px;
  border-radius: 30px;
  elevation: 4;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
`;


export const AddButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-weight: bold;
  font-size: 16px;
`;
export const LogoutButton = styled.TouchableOpacity`
  padding: 8px;
  background-color: #cc0000;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const WelcomeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
  paddingbottom: 20px;
`;

export const ButtonsContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 35px 40px 35px;
  background-color: #121212;
  border-top-width: 1px;
  border-top-color: #333;
`;

