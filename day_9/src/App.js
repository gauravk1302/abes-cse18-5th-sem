import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  console.log(count);

  return (
    <div className="container">

      <h1>Counter App</h1>

      <div className="counter">
        <button onClick={increment}>+</button>

        <span>{count}</span>

        <button onClick={decrement}>-</button>
      </div>

      <div>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>

    </div>
  );
};

export default App;
