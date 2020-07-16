import React from 'react';

function Greetings() {

  const x = new Date();
  const y = x.getHours();
  let time;
  const colours = {};

  if (y < 12) {
    time = "morning";
    colours.color = "#d13b40"
  } else if (y >= 12 && y <= 18) {
    time = "afternoon";
    colours.color = "#4ec5a5";
  } else {
    time = "night";
    colours.color = "#117893";
  }

  return (
    <h1 style={colours}>Have a great{` ${time}`}!</h1>
  );
}

export default Greetings;