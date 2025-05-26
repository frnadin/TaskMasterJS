// components/LinkButton/index.js
import React from 'react';
import { LinkTouchable, LinkText } from './LinkButton.styles';

const LinkButton = ({ children, onPress, style }) => {
  return (
    <LinkTouchable onPress={onPress}>
      <LinkText style={style}>
        {children}
      </LinkText>
    </LinkTouchable>
  );
};

export default LinkButton;
