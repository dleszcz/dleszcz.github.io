import React from 'react';
import './App.css';
import Focusable from './Focusable';
import { StyledButton } from './Button.style';

const Button = (props) => {
  const {disabled, text, handleClick, focusKey} = props;

  console.log('xxx render Button')
  
  return (
    <Focusable
      Component={StyledButton}
      handleClick={handleClick}
      disabled={disabled}
      focusKey={focusKey}
    >
      {text || 'Button'}
    </Focusable>
  );
}

export default Button;
