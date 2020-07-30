import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Box({ color, clickEffect, text }) {
  return (
    <Button
      type="button"
      color={color}
      onClick={() => {
        if (clickEffect) {
          clickEffect();
        }
      }}
    >
      {text}
    </Button>
  );
}

const Button = styled.button`
  background-color: ${(props) => props.color};
  text-align: center;
`;

Box.propTypes = {
  color: PropTypes.string,
  clickEffect: PropTypes.func,
  text: PropTypes.string,
};

Box.defaultProps = {
  color: null,
  clickEffect: null,
  text: 'Button',
};

export default Box;
