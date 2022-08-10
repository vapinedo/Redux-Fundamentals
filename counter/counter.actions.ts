import { Action } from "../ngrx-fake/ngrx";

export const decrementAction: Action = {
  type: "DECREMENT",
};

export const incrementAction: Action = {
  type: "INCREMENT",
};

export function multiplyAction(payload: any) {
  const action: Action = {
    type: "MULTIPLY",
    payload,
  };
  return action;
}

export function divideAction(payload: any) {
  const action: Action = {
    type: "DIVIDE",
    payload,
  };
  return action;
};

export function resetAction() {
  const action: Action = {
    type: "RESET",
  };
  return action;
};
