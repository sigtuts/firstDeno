import { useState } from "preact/hooks";

export default function Geo() {
  const [count, setCount] = useState(0);
  const [count1, setCount2] = useState(0);
  const handleInputChange = (event) => {
    // Use parseInt to convert the input value to a number
    const newValue = parseInt(event.target.value);
    setCount(newValue);
  };
  return (
    <div>
      <input 
        type="number" 
        value={count} 
        onChange={handleInputChange} 
      />
      <input 
        type="number" 
        value={count1} 
        onChange={handleInputChange} 
      />
      <p>{count}</p>
    </div>
  );
}