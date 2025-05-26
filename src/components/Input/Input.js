import React from 'react';
import { StyledInput } from './Input.styles';

const Input = ({ placeholder, secureTextEntry, ...props }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      {...props}
    />
  );
};

export default Input;
