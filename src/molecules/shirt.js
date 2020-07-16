import React, { useState } from 'react';
import PricedColourButton from '../atoms/pricedColourButton';

function Shirt(props) {

  const [color, setColor] = useState();
 
  const colours = [ 'Blue', 'Red', 'Pink', 'Green', 'Magenta', 'Turquoise'];

 

  return (
    <>
      
    <div>
        <h1 style={{color}}>This is your T-shirt text</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        {
          colours.map(colour => 
            <PricedColourButton text={colour + ' ' + colour.length + ' EUR'} style={{backgroundColor: colour.toLowerCase()}} clickEffect={() => setColor(colour.toLowerCase())} />
          )
        }
        </div>
        <br></br>
        <h3>Please check your purchase</h3>
        <div style={{justifyContent: 'center'}}>
            <div>
                <p>Product name: T-shirt</p>
            </div>
            <div>
                <p>Product colour:</p>
                <p>{color}</p>
            </div>
            {/* <div>
                <p>Price:</p>
                <p>{color.length}</p>
            </div> */}
        </div>

    </div>
      
    </>
  );
}

export default Shirt;
