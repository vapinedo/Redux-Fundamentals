import { Action } from "./ngrx-fake/ngrx";
import {
  decrementAction,
  divideAction,
  incrementAction,
  multiplyAction,
  resetAction,
} from "./counter/counter.actions";

function reducer(state = 10, action: Action) {
  switch (action.type) {
    case "DECREMENT":
      return (state = state - 1);
    case "INCREMENT":
      return (state = state + 1);
    case "MULTIPLY":
      return (state = state * action.payload);
    case "DIVIDE":
      return (state = state / action.payload);
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
}

console.log(reducer(10, incrementAction));
console.log(reducer(10, decrementAction));
console.log(reducer(10, multiplyAction(10)));
console.log(reducer(10, divideAction(2)));
console.log(reducer(10, resetAction()));
