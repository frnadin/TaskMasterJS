import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.placeholder,
}))`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

export const LinkText = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.link};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
`;
