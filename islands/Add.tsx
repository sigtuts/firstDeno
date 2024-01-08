import React, { useState } from 'react';

export default function Add() {
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');

  const handleInputChange = (input, value) => {
    if (input === 'fir') {
      setFirstInput(value);
    } else if (input === 'sec') {
      setSecondInput(value);
    }
  };

  const sum = parseInt(firstInput) + parseInt(secondInput);

  return (
    <div>
      <input
        id="fir"
        type="number"
        value={firstInput}
        onChange={(e) => handleInputChange('fir', e.target.value)}
      />
      <input
        id="sec"
        type="number"
        value={secondInput}
        onChange={(e) => handleInputChange('sec', e.target.value)}
      />
      <p>{isNaN(sum) ? 'Invalid input' : `Sum: ${sum}`}</p>
    </div>
  );
}