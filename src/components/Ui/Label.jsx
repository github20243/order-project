import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Label = ({ htmlFor, children, color }) => {
  return (
    <StyledLabel htmlFor={htmlFor} color={color}>
      {children}
    </StyledLabel>
  );
};


export default Label;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
  color: ${props => props.color || 'black'};
`;
