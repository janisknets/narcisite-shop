import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '../atoms/box';

function Palette({ colours }) {
  const [color, setColor] = useState();

  return (
    <>
      <div>
        <h1 style={{ color }}>Look!!!! I am changing colors!!!!</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {
            colours.map((colour) => (
              <Box
                text={colour}
                style={{ backgroundColor: colour.toLowerCase() }}
                clickEffect={() => setColor(colour.toLowerCase())}
              />
            ))
          }
        </div>
      </div>
    </>
  );
}

Palette.propTypes = {
  colours: PropTypes.arrayOf(PropTypes.string),
};

Palette.defaultProps = {
  colours: ['Blue', 'Red', 'Pink', 'Green', 'Magenta', 'White'],
};

export default Palette;
