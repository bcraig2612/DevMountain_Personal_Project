const initialState = {
    user_id: '',
    user_name: '',
    email: '',
    password: ''
}

const SET_LOGIN_USER = 'SET_LOGIN_USER'
const USER_NAME = 'USER_NAME'
const EMAIL = 'EMAIL'
const PASSWORD = 'PASSWORD'

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_LOGIN_USER:
            console.log('this is the user who logged in', payload);
            return { ...state, user:payload };
        case USER_NAME:
            return { ...state, user_name: payload };
        case EMAIL:
            return { ...state, email: payload };
        case PASSWORD:
            return { ...state, password: payload };
        default:
            return state;
    }
}
// function to populate logged in user with user data
export function setLoginUser(user) {
    return {
        type: SET_LOGIN_USER,
        payload: user
    }
}
export function insertUserName(username) {
    return {
        type: USER_NAME,
        payload: username
    }
}
export function insertEmail(email) {
    return {
        type: EMAIL,
        payload: email
    }
}
export function insertPassword(password) {
    return {
        type: PASSWORD,
        payload: password
    }
}