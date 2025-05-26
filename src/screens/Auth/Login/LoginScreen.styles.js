// screens/Login/LoginScreen.styles.js
import styled from 'styled-components/native';
import { KeyboardAvoidingView } from 'react-native';
import LinkButton from '../../../components/LinkButton/LinkButton';

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.spacing.lg}px;
  width: 100%;
`;

export const ForgotPasswordLink = styled(LinkButton)`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;
