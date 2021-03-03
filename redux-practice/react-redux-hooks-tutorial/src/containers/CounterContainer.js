import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../modules/counter';

const CounterContainer = () => {
  const counter = useSelector(state => state.counter, []);
  const dispatch = useDispatch();

  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());

  return (
    <Counter
      number={counter}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};

export default CounterContainer;