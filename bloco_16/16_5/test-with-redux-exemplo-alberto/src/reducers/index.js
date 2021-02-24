const intial_state = {
  counter: 0,
};

const clickReducer = (state = intial_state, action) => {
  switch (action.type) {
    case 'ADD_CLICK':
      return {counter: state.counter +1 };
    default:
      return state;
  }
};

export default clickReducer;