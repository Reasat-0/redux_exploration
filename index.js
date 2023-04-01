
const {createStore} = require("redux")


// Defining Constants....
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"



const ADD_USER = "ADD_USER"




//  State....

const initialState = {

}

const initUserState = {

}



// action => an object with 2 important propery {type, payload} ......--- What am i tring to do....

    // Increment
    const IncrementCounter = () => {
        return {
            type: 'INCREMENT',
            payload: {
        }
    }}

    const DecrementCounter = () => {
        return {
            type: DECREMENT,
            payload: {
        }
    }}



    const AddUserAction = () => {
        return {
            type: ADD_USER,
            payload: {
                name: 'SHAKIL'
            }
    }}




// Reducer -- a pure function . means it takes something and return a value...
const CounterReducer = (state=initialState, action) => {
    switch(action.type) {
        case INCREMENT : 
            return {
                ...state,    
                count: state.count + 1 
            }
        case DECREMENT : 
            return {
                ...state,    
                count: state.count + 1 
            }
        default:
            state
    }
}


// store - it holds our states. There is 3 important methods -> 1 getState(), check states, 2. Dispatch() -> dispatch aciton, 3 Subscribe => 

const Store = createStore(CounterReducer);

Store.subscribe(() => {
    console.log(Store.getState())
})


// dispatch action by store

    Store.dispatch(incrementCounter())
    Store.dispatch(incrementCounter())
    Store.dispatch(incrementCounter())