import { useReducer } from 'react';

import reducer from '../Store/Reducers/CounterReducer';
import { useUserContext } from '../Store/UserContext';

function Env({ env }) {
  return (
    <>
      <div className="ReducerCounter componentBox">{env}</div>
    </>
  );
}

export default Env;
