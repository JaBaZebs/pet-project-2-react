const defaultState = {
    user: {
        login: '',
        password: ''
    }
}
export default function tokenReducer(state = defaultState, action){
    switch (action.type) {
        case "SET_LOGIN":
            return {...state, user: {...user, login: action.payload}};
        case 'SET_PASSWORD':
            return {...state, user:{...user, password: action.payload}};
        case 'SET_USER':
            return {...state, user: action.payload};
        case 'RESET_USER':
            return {...state, 
                        user: {
                                login: '',
                                password: ''
                              }
                    }
        default:
            return state;
    }
}