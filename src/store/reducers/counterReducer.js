const INITIAL_STATE = {
  count: 0,
  name: "no name",
};


// ---------- REDUCER
//reducer=(state, action)=>{
//    return {new state ...}
//}

export const counterReducer = (state = INITIAL_STATE, action) => {
  // type - type of the action
  // payload - data to do the aciton
  const { type, payload } = action;

  switch (type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      return {
        ...state, // copy all members from state
        count: state.count + 1,
      };
    case COUNTER_ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    case COUNTER_ACTION_TYPES.RESET:
      return { ...state, count: 0 };
    default:
      return state;
    //  throw new Error('Invalid action type');
  }
};

// --------- TYPES
export const COUNTER_ACTION_TYPES = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET",
  };

// // ------ ACTIONS
export const increment = () => ({ type: COUNTER_ACTION_TYPES.INCREMENT });
export const decrement = () => ({ type: COUNTER_ACTION_TYPES.DECREMENT });
export const reset = () => ({ type: COUNTER_ACTION_TYPES.RESET });

// // ------- SELECTORS
export const selectCount = (store) => store.counter.count;
export const selectName = (store) => store.counter.name;