import React from 'react';
import PropTypes from 'prop-types';

function Button({ clickEffect, text}) {
  return (
    <button
      type="button"
      onClick={() => {
        if (clickEffect) {
          clickEffect();
        }
      }}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  clickEffect: PropTypes.func,
  text: PropTypes.string,
};

Button.defaultProps = {
  clickEffect: null,
  text: 'Button',
};

export default Button;
