import { useState } from "preact/hooks";

export default function Geo() {
  const [count, setCount] = useState(0);
  const [count1, setCount2] = useState(0);
  const handleInputChange = (event) => {
    // Use parseInt to convert the input value to a number
    const newValue = parseInt( count.value);
    setCount(newValue);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input 
        type="text" 
        value={count} 
        onChange={handleInputChange} 
      />
      <input 
        type="text" 
        value={count1} 
        onChange={handleInputChange} 
      />
      <p>{count}</p>
    </div>
  );
}