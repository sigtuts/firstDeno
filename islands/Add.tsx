export default function Add() {
    const numbers = [175, 50, 25];
    document.getElementById("demo").innerHTML = numbers.reduce(myFunc);
    
    function myFunc(total, num) {
      return total + num;
    }
    return (
      <div>
        {/* <Button onClick={() => setCount(count - 1)}>-1</Button> */}
        <input id="fir" type="number" />
        <input id="sec" type="number" />
        <p>
            {sum}
        </p>
      </div>
    );
  }