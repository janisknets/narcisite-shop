import React, { useState } from 'react';
import Box from '../atoms/box';

function Palette() {
  const [color, setColor] = useState();

  const colours = ['Blue', 'Red', 'Pink', 'Green', 'Magenta', 'White'];

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

export default Palette;
