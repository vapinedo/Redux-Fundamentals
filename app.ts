// Actions
interface Action {
    type: string ;
    payload?: any;
}

// const incrementAction: Action = {
//     type: "INCREMENT"
// };

function reducer(state = 10, action: Action) {
    if (action.type == "INCREMENT") {
        return state = state + 1;
    }
    return state;
}

// Use the reducer
const incrementAction: Action = {
    type: "INCREMENT"
};
console.log(reducer(10, incrementAction));