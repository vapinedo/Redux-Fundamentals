import { createStore, Store } from "redux";
import { counterReducer } from "./counter/counter.reducer";
import { incrementAction } from "./counter/counter.actions";

const store: Store = createStore(counterReducer);

store.subscribe(function () {
  console.log("State", store.getState( ));
});
store.dispatch(incrementAction);
