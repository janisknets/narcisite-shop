import React, { useState } from 'react';
import TshirtSvg from '../atoms/tshirtSvg';
import PricedColourButton from '../atoms/pricedColourButton';

function Shirt(props) {

  const colours = [ 'Lightgrey', 'Blue', 'Red', 'Green', 'Magenta', 'Turquoise']
  const defaultText = "Put your text here"

  const [color, setColor] = useState(colours[0]);
  const [tshirtText, setTshirtText] = useState(defaultText);
  // const [summ, setSumm] = useSumm();

  const handleTextChange = (e) => {
    if ((e.target.value.length) === 0) {
      setTshirtText(defaultText) 
    } else {
      setTshirtText(e.target.value)
    }
  }
  
  return (
      
    <div>
      <div>
        <TshirtSvg color={color}/>
      </div>
      <h3 style={{color}}>This is your T-shirt colour</h3>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {
          colours.map(colour => 
            <PricedColourButton key={colour} text={colour + ' ' + colour.length + ' EUR'} style={{backgroundColor: colour.toLowerCase()}} clickEffect={() => setColor(colour.toLowerCase())} />
          )
        }
      </div>
      <br></br>
      <h3>{tshirtText}</h3>
  
      <form>
        <input
          type="text"
          name="textInput"
          style={{ flex: '10', width: '50%', padding: '5px', margins: '15px' }}
          placeholder="Your text here..."
          onChange={handleTextChange} 
        />
       
      </form>
        
      <br></br>

      <h3>Please check your purchase</h3>
      <div style={{justifyContent: 'center'}}>
          <div>
              <p>Product name: T-shirt</p>
          </div>
          <div style={{display: 'flex',justifyContent: 'center'}}>
              <p>Product colour:</p>
              <p>{color + color.length  + ' EUR'}</p>
          </div>
          <div style={{display: 'flex',justifyContent: 'center'}}>
              <p>Text on t-shirt:</p>
              <p>{tshirtText + tshirtText.length  + ' EUR'}</p>
          </div>
          <div style={{display: 'flex',justifyContent: 'center'}}>
              <p>Total amount:</p>
              <p>{ color.length  + tshirtText.length + ' EUR'}</p>
          </div>
      </div>

    </div>
      
    
  );
}

export default Shirt;
