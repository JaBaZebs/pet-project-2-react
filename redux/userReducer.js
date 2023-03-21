import Types from "./actionType.js";

const defaultState = {
    auth: false,
    user : {
        name: 'null',
        todos: {null:'null'} 
    },
    loading: true
}
export default function userReducer(state = defaultState, action){
    switch (action.type) {
        case Types.SET_USER:
            return {...state, ...action.payload};
        default:
            return state;
    }
}