const initialState = {
    user_id: '',
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
    password: '',
    profile_picture: '',
    sex: ''
}

const SET_REGISTER_USER = 'SET_REGISTER_USER'
const FIRST_NAME = 'FIRST_NAME'
const LAST_NAME = 'LAST_NAME'
const USER_NAME = 'USER_NAME'
const EMAIL = 'EMAIL'
const PASSWORD = 'PASSWORD'
const SEX = 'SEX'
const PROFILE_PICTURE = 'PROFILE_PICTURE'

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_REGISTER_USER:
            console.log('this is the user who registered', payload);
            return { ...state, user: payload };
        case FIRST_NAME:
            return { ...state, first_name: payload };
        case LAST_NAME:
            return { ...state, last_name: payload };
        case USER_NAME:
            return { ...state, user_name: payload };
        case EMAIL:
            return { ...state, email: payload };
        case PASSWORD:
            return { ...state, password: payload };
        case SEX:
            return { ...state, sex: payload };
        case PROFILE_PICTURE:
            return { ...state, sex: payload };
        default:
            return state;
    }
}

// function to populate registered user with user data
export function setRegisterUser(user) {
    return {
        type: SET_REGISTER_USER,
        payload: user
    }
}
export function insertUserName(username) {
    return {
        type: USER_NAME,
        payload: username
    }
}

export function insertFirstName(first) {
    return {
        type: FIRST_NAME,
        payload: first
    }
}

export function insertLastName(last) {
    return {
        type: LAST_NAME,
        payload: last
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
export function insertSex(sex) {
    return {
        type: SEX,
        payload: sex
    }
}
export function insertProfilePicture(url) {
    return {
        type: PROFILE_PICTURE,
        payload: url
    }
}