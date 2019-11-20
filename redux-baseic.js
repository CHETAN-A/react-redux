const redux = require('redux');
const createStore = redux.createStore;

let initialState = {
    counter: 0
}

//reducer
const rootReducer = (state=initialState, action) => {
    if (action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter+1
        }
    }
    if (action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter+action.value
        }
    }
    return state;
};

//store
const store = createStore(rootReducer);
console.log(store.getState());


// Subscription
store.subscribe(() => {
    console.log("[SUBSCRIPTION]",store.getState());
})

//Dispatch action
store.dispatch({type: 'INC_COUNTER'});
console.log(store.getState());
store.dispatch({type: 'ADD_COUNTER', value: 5});
console.log(store.getState());
