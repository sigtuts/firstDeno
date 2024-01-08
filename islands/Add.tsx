import { h } from 'preact';
import { useState } from 'preact/hooks';

const Add = () => {
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
        onInput={(e) => handleInputChange('fir', e.target.value)}
      />
      <input
        id="sec"
        type="number"
        value={secondInput}
        onInput={(e) => handleInputChange('sec', e.target.value)}
      />
      <p>{isNaN(sum) ? 'Invalid input' : `Sum: ${sum}`}</p>
    </div>
  );
};

export default Add;
