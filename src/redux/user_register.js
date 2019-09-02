const initialState = {
    user_id: '',
    user: null
}

//Login
const SET_LOGIN_USER = 'SET_LOGIN_USER'
const SET_REGISTER_USER = 'SET_REGISTER_USER'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_REGISTER_USER:
        case SET_USER_PROFILE:
        case SET_LOGIN_USER:
            console.log('this is the user who is in', payload);
            return { ...state, user: payload };
        default:
            return state;
    }
}

// function to populate registered user with user data
export function setLoginUser(user) {
    return {
        type: SET_LOGIN_USER,
        payload: user
    }
}
export function setRegisterUser(user) {
    console.log('REDUCER', user);
    return {
        type: SET_REGISTER_USER,
        payload: user
    }
}
export function setUserProfile(profile) {
    return {
        type: SET_USER_PROFILE,
        payload: profile
    }
}