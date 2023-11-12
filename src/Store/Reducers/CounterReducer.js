const counterReducer = (state, action) => {
  switch (
    action.type // switch statements are common in reducers
  ) {
    case 'increment':
      return state + 1;
    case 'increment10':
      return state + 10;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
