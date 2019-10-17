import React, { useState } from 'react';

function Converter() {
  const [ hexColor, setHexColor ] = useState('#34495e');
  const [ rgb, setRgb ] = useState({r: 52, g: 73, b: 94});

  const getRGBString = (r, g, b, modifyer) => {
    if (r <= 255 && g <= 255 && b <= 255) {
      return `rgb(${r - Number(modifyer)}, ${g - Number(modifyer)}, ${b - Number(modifyer)})`;
    }
    return null;
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    const color = e.target.value;

    setHexColor(color);

    if (color.length === 6 + 1) {
      setRgb({
        r: parseInt(color.slice(1, 3), 16),
        g: parseInt(color.slice(3, 5), 16),
        b: parseInt(color.slice(5, 7), 16),
      })
    }
  }

  return (
    <div 
    className='root' 
    style={{backgroundColor: getRGBString(rgb.r, rgb.g, rgb.b, 0) || getRGBString(233, 75, 53, 0)}}
    >
      <div className='wrapper'>
        <input className='input' type='text' value={hexColor} onChange={handleInputChange}></input>
        <div className='output' 
        style={{backgroundColor: getRGBString(rgb.r, rgb.g, rgb.b, 15) || getRGBString(233, 75, 53, 15)}}>
          {getRGBString(rgb.r, rgb.g, rgb.b, 0) || 'Ошибка!'}
        </div>
      </div>
    </div>
  )
};

export default Converter