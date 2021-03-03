import React from 'react';

const Counter = ({ onIncrement, onDecrement, number }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrement}>+1</button>
        <button onClick={onDecrement}>-1</button>
      </div>
    </div>
  );
};

export default Counter;