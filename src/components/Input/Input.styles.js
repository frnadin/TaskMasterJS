import styled from 'styled-components/native';

export const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.placeholder,
}))`
  border-width: 1px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  border-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;
