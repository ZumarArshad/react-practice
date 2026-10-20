import { useState } from "react";
export function CounterBlock() {
   const [count, setCount] = useState(0);
function increment() {
  setCount((prevCount) => prevCount + 1);
}

function decrement() {
  setCount((prevCount) => prevCount - 1);
}
   function reset(){
     setCount(0);
   } 
  return(
    <div className="counter-block">
      <h1>Counter Block</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}