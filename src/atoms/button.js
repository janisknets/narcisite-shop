import React from 'react';

function Button(props) {
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

export default Button;
