import { Action } from "../ngrx-fake/ngrx";

export function counterReducer(state = 10, action: Action) {
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