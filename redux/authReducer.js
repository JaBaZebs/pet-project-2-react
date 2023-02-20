const defaultState = {
    auth: false
 }
export default function authReducer(state = defaultState, action){
    switch (action.type) {
        case 'SETAUTHTRUE':
            return {...state, auth: true};
        case 'SETAUTHFALSE':
            return {...state, auth: false};
        default:
            return state;
    }
}