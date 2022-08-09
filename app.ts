interface Action {
  type: string;
  payload?: any;
}

function reducer(state = 10, action: Action) {
  switch (action.type) {
    case "DECREMENT":
      return (state = state - 1);
    case "INCREMENT":
      return (state = state + 1);
    case "MULTIPLY":
        return state = state * action.payload
    default:
        return state;
  }
}

// Use the reducer
const decrementAction: Action = {
  type: "DECREMENT",
};
const incrementAction: Action = {
  type: "INCREMENT",
};
function multiplyAction(payload: any) {
    const action: Action = {
      type: "MULTIPLY",
      payload,
    };
    return action;
}
console.log(reducer(10, incrementAction));
console.log(reducer(10, decrementAction));
console.log(reducer(10, multiplyAction(10)));
