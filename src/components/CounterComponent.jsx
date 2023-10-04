import { useReducer } from 'react';

import reducer from '../Store/Reducers/StateReducer';
import { useUserContext } from '../Store/UserContext';

function Counter() {
  const [counter, dispatch] = useReducer(reducer, 0);
  const { currentUser, handleUpdateUser } = useUserContext();

  const handleIncrement = () => {
    handleUpdateUser({ email: 'user@test.com' });
    // we call the dispatch function to make all state updates
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to reducer
    dispatch({ type: 'decrement' });
  };

  return (
    <>
      <div className="ReducerCounter componentBox">
        {currentUser.email}
        <h2>Count: {counter}</h2>
        <button onClick={handleIncrement}>Reducer Increment</button>
        <button onClick={handleDecrement}>Reducer Decrement</button>
      </div>
    </>
  );
}

export default Counter;
