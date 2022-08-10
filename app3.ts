import { Action, Reducer } from "./ngrx-fake/ngrx";
import { counterReducer } from "./counter/counter.reducer";
import { incrementAction } from "./counter/counter.actions";

class Store<T> {
  //   private state: T;

  constructor(private reducer: Reducer<T>, private state: T) {
    // this.state = state;
  }

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state =  this.reducer(this.state, action);
  }
}

const store = new Store(counterReducer, 10); 

console.log(store.getState());
store.dispatch(incrementAction);
store.dispatch(incrementAction);
console.log(store .getState());
