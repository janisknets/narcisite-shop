import React from 'react';

function PricedColourButton(props) {
  return (
    <button onClick={() => {
      if (props.clickEffect) {
        props.clickEffect();
        return;
      }
    }}
    >{props.text}</button>
  );
}

export default PricedColourButton;
