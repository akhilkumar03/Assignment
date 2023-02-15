
import React, { useState } from 'react';
import './style.css';


function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let color = 'green';
  if (count >= 5 && count < 10) {
    color = 'blue';
  } else if (count === 10) {
    color = 'red';
  }

  return (
    <div className='container'>
      <div className='heading'>
      <h1 style={{ color: color }}>{count}</h1>
      </div>
      <div className='btn'>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      </div>
        <h4>Assignment Done by : Akhil Kumar Singh</h4>
        <h5>Registration No: 12017965</h5>
    </div>

  );
}

export default Counter;
