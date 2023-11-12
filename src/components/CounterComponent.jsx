import { useCounterContext } from '../Store/CounterContext';

function Counter() {
  const { counter, dispatch } = useCounterContext();

  const handleIncrement = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: 'increment' });
  };
  const handleIncrement10 = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: 'increment10' });
  };

  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to reducer
    dispatch({ type: 'decrement' });
  };

  return (
    <>
      <div className="ReducerCounter componentBox">
        <h2>Count: {counter}</h2>
        <button onClick={handleIncrement}>Reducer Increment</button>
        <button onClick={handleIncrement10}>Reducer Increment 10</button>
        <button onClick={handleDecrement}>Reducer Decrement</button>
      </div>
    </>
  );
}

export default Counter;
