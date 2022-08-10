import { Action } from "./ngrx-fake/ngrx";
import { 
  decrementAction,
  divideAction,
  incrementAction,
  multiplyAction,
  resetAction,
} from "./counter/counter.actions";

console.log(reducer(10, incrementAction));
console.log(reducer(10, decrementAction));
console.log(reducer(10, multiplyAction(10)));
console.log(reducer(10, divideAction(2)));
console.log(reducer(10, resetAction()));
