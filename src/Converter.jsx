import React, { useState } from 'react';

const checkPrimaryColor = color => {
  if (typeof color !== 'number' || isNaN(color) || color > 255) {
    return false;
  }
  return true;
};

const checkRGB = (r, g, b) => {
  let isValid = true;
  [r, g, b].forEach(primaryColor => {
    if (!checkPrimaryColor(primaryColor)) {
      isValid = false;
    };
  });
  return isValid;
};

const getRGBString = (r, g, b, modifyer) => {
  if (checkRGB(r, g, b)) {
    console.log('rgb fine')
    return `rgb(${r - Number(modifyer)}, ${g - Number(modifyer)}, ${b - Number(modifyer)})`;
  }
  return null;
};

const errorRed = 'rgb(233, 75, 53)';
const darkerErrorRed = getRGBString(233, 75, 53, 15);

function Converter() {
  const [ hexColor, setHexColor ] = useState('#34495e');
  const [ rgb, setRgb ] = useState({r: 52, g: 73, b: 94});

  const handleInputChange = (e) => {
    e.preventDefault();
    const color = e.target.value;

    setHexColor(color);

    if (color.length === 6 + 1) {
      const r = +`0x${color.slice(1, 3)}`;
      const g = +`0x${color.slice(3, 5)}`;
      const b = +`0x${color.slice(5, 7)}`;
      setRgb({
        r: checkPrimaryColor(r) ? r : null,
        g: checkPrimaryColor(g) ? g : null,
        b: checkPrimaryColor(b) ? b : null,
      })
      return;
    }
    setRgb({r: null, g: null, b: null});
  }

  return (
    <div 
    className='root' 
    style={{backgroundColor: getRGBString(rgb.r, rgb.g, rgb.b, 0) || errorRed}}
    >
      <div className='wrapper'>
        <input className='input' type='text' value={hexColor} onChange={handleInputChange}></input>
        <div className='output' 
        style={{backgroundColor: getRGBString(rgb.r, rgb.g, rgb.b, 15) || darkerErrorRed}}>
          {getRGBString(rgb.r, rgb.g, rgb.b, 0) || 'Ошибка!'}
        </div>
      </div>
    </div>
  )
};

export default Converter