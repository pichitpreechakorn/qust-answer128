import { createStore, combineReducers, applyMiddleware } from "redux";


const score = (state = { point: 0 }, action) => {
    switch (action.type) {
        case "setPoint": {
            state.point = action.payload
            break;
        }
        default: {

        }
    }
    return state
}
const username = (state =
    {
        name: "",
        surname: "",
        ground: "",
        number: "",
        higthnumber: ""
    }, action) => {
    switch (action.type) {
        case "setUsername": {
            state = action.payload
            break;
        }
        default: {

        }
    }
    return state
}
const number = (state =
    {
        suscess: [],
        fail: []
    }, action) => {
    switch (action.type) {
        case "addSuscess": {
            state = action.payload
            break;
        }
        case "addFail" : {
            state = action.payload
            break;
        }
        default : {

        }
    }
    return state
}



const myLogger = store => next => action => {
    console.log("Log Action", action);
    next(action);
};

const store = createStore(
    combineReducers({
        score,
        username,
        number
    }),
    {},
    applyMiddleware(myLogger)
);
store.subscribe(() => {
    console.log("Updata Store", store.getState());
});

export default store;