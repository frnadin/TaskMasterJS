import React from 'react';
import { ButtonContainer, ButtonText } from './PrimaryButton.styles';

const PrimaryButton = ({ title, onPress, style, textStyle }) => {
  return (
    <ButtonContainer onPress={onPress} style={style}>
      <ButtonText style={textStyle}>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default PrimaryButton;
