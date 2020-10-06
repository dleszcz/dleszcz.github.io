import styled from 'styled-components';

export const StyledButton = styled.button`
  border: ${props => props.focused ? '2px solid blue' : '2px solid #ccc'};  
  width: 200px;
  margin-bottom: 25px;
  border-radius: 5px;
  padding: 4px;

  &:hover {
    border: 2px solid blue;
    color: blue;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &[disabled]:hover {
    color: #aaa;
    cursor: not-allowed;
    border: 2px solid #ccc;
  }
`;

