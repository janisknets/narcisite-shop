import React from 'react';

const TshirtSvg = (props) =>
    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="110">
        <polygon points="40,10 40,40 50,40 50,110 100,110 100,40 110,40 110,10" 
        style={{"fill":props.color, "stroke":"black", "strokeWidth":1, "fillRule":"evenodd"}} />
    </svg>
 
export default TshirtSvg;
