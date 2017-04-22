const initialState = {
    isAuthenticated:false,
    userData:null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS': {
            return state = { ...state, isAuthenticated: action.payload.auth, userData:action.payload.userData }
            break;
        }
        default:{
            return state
        }
    }
}