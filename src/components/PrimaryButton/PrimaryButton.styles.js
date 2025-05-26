import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button};
  border-color: ${({ theme }) => theme.colors.buttonBorder || theme.colors.button};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonText || theme.colors.text};
`;