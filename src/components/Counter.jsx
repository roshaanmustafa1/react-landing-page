import React, { useState } from "react";

function Counter() {
  // Define initial state
  const [count, setCount] = useState(0);

  // Handle increment with max value check
  const increment = () => {
    if (count < 20) {
      setCount((testCount) => testCount + 1);
    }
  };

  // Handle decrement with min value check
  const decrement = () => {
    if (count > 0) {
      setCount((testCount) => testCount - 1);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
