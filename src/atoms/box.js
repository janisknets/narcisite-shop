import React from 'react';

function Box(props) {
  
  
    return (
    <button style={props.style} onClick={() => {
      if (props.clickEffect) {
        props.clickEffect();
        return;
      }
    }}
    >{props.text}</button>
  );
}

export default Box;
