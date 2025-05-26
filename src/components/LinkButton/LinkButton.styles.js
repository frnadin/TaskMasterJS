import styled from 'styled-components/native';

export const LinkTouchable = styled.TouchableOpacity``;

export const LinkText = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => theme.colors.link};
`;
