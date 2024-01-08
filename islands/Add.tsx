import { h } from 'preact';
import { useState } from 'preact/hooks';

const Add = () => {
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [sum, setSum] = useState(null);

  const handleInputChange = (input, value) => {
    if (input === 'fir') {
      setFirstInput(value);
    } else if (input === 'sec') {
      setSecondInput(value);
    }
  };

  const handleCalculateClick = () => {
    const result = parseInt(firstInput) + parseInt(secondInput);
    setSum(isNaN(result) ? null : result);
  };

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
      <button onClick={handleCalculateClick}>Calculate</button>
      <p>{sum !== null ? `Sum: ${sum}` : 'Invalid input'}</p>
    </div>
  );
};

export default Add;
