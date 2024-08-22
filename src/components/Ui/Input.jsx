import React from 'react';
import styled from 'styled-components';

const SimpleInput = ({ type = 'text', name, value, onChange, placeholder ,id}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
    />
  );
};

export default SimpleInput;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #17e1e5;
    outline: none;
  }
`;
