import { 
    REGISTRATION_SET_USERNAME_IS_UNIQUE, 
    REGISTRATION_SEND_USER_DATA
} from "../actions/registrationActions";

const initState = {
    user: {
        username: null,
        email: null,
        country: null,
        phone: null,
        password: null
    },
    usernameIsUnique: null,
    submitDisabled: false
};

const registrationReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTRATION_SET_USERNAME_IS_UNIQUE:
            return {
                ...state,
                usernameIsUnique: action.payload,
                submitDisabled: false
            };
        case REGISTRATION_SEND_USER_DATA:
            return {
                ...state,
                user: action.payload,
                submitDisabled: true
            };
        default:
            return state; 
    }
};

export default registrationReducer;