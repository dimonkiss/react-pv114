const COUNT_DATA = {
    count: 0,
    name: "no name",
};


// ---------- REDUCER
//reducer=(state, action)=>{
//    return {new state ...}
//}

const incrementCount = (state) => {
    return {
        ...state, // copy all members from state
        count: state.count + 1,
    };
}


export const counterReducer = (state = COUNT_DATA, action) => {
    // type - type of the action
    // payload - data to do the aciton
    const { type, payload } = action;

    switch (type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
            return incrementCount(state);
        case COUNTER_ACTION_TYPES.DECREMENT:
            return { ...state, count: state.count - 1 };
        case COUNTER_ACTION_TYPES.RESET:
            return { ...state, count: 0 };
        case COUNTER_ACTION_TYPES.INCREMENTBYN:
            return { ...state, count: state.count+payload.step };
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
    INCREMENTBYN: "INCREMENTBYN"
};

// // ------ ACTIONS
export const increment = () => ({ type: COUNTER_ACTION_TYPES.INCREMENT });
export const decrement = () => ({ type: COUNTER_ACTION_TYPES.DECREMENT });
export const reset = () => ({ type: COUNTER_ACTION_TYPES.RESET });
export const incrementbyn = (step) => ({ type: COUNTER_ACTION_TYPES.INCREMENTBYN, payload: { step } });

// // ------- SELECTORS
export const selectCount = (store) => store.counter.count;
export const selectName = (store) => store.counter.name;