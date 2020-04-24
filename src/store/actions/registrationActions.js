export const REGISTRATION_SET_USERNAME_IS_UNIQUE = 'REGISTRATION_SET_USERNAME_IS_UNIQUE';
export const REGISTRATION_SEND_USER_DATA = 'REGISTRATION_SEND_USER_DATA';

export const setUsernameIsUnique = value => {
    return {
        type: REGISTRATION_SET_USERNAME_IS_UNIQUE,
        payload: value
    }
}

export const sendUserData = user => {
    return {
        type: REGISTRATION_SEND_USER_DATA,
        payload: user
    }
}