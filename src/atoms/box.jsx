import React from 'react';
import PropTypes from 'prop-types';

function Box({ style, clickEffect, text }) {
  return (
    <button
      type="button"
      style={style}
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

Box.propTypes = {
  style: PropTypes.string,
  clickEffect: PropTypes.func,
  text: PropTypes.string,
};

Box.defaultProps = {
  style: null,
  clickEffect: null,
  text: 'Button',
};

export default Box;
