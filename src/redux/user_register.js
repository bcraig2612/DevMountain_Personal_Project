const initialState = {
    user_id: '',
    user: null
}

//Login
const SET_LOGIN_USER = 'SET_LOGIN_USER'
const SET_REGISTER_USER = 'SET_REGISTER_USER'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
// const FIRST_NAME = 'FIRST_NAME'
// const LAST_NAME = 'LAST_NAME'
// const USER_NAME = 'USER_NAME'
// const EMAIL = 'EMAIL'
// const PASSWORD = 'PASSWORD'
// const SEX = 'SEX'
// const PROFILE_PICTURE = 'PROFILE_PICTURE'

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_REGISTER_USER:
        case SET_USER_PROFILE:
        case SET_LOGIN_USER:
            console.log('this is the user who is in', payload);
            return { ...state, user:payload };
        // case FIRST_NAME:
        //     return { ...state, first_name: payload };
        // case LAST_NAME:
        //     return { ...state, last_name: payload };
        // case USER_NAME:
        //     return { ...state, user_name: payload };
        // case EMAIL:
        //     return { ...state, email: payload };
        // case PASSWORD:
        //     return { ...state, password: payload };
        // case SEX:
        //     return { ...state, sex: payload };
        // case PROFILE_PICTURE:
        //     return { ...state, sex: payload };
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
// export function insertUserName(username) {
//     return {
//         type: USER_NAME,
//         payload: username
//     }
// }

// export function insertFirstName(first) {
//     return {
//         type: FIRST_NAME,
//         payload: first
//     }
// }

// export function insertLastName(last) {
//     return {
//         type: LAST_NAME,
//         payload: last
//     }
// }

// export function insertEmail(email) {
//     return {
//         type: EMAIL,
//         payload: email
//     }
// }
// export function insertPassword(password) {
//     return {
//         type: PASSWORD,
//         payload: password
//     }
// }
// export function insertSex(sex) {
//     return {
//         type: SEX,
//         payload: sex
//     }
// }
// export function insertProfilePicture(url) {
//     return {
//         type: PROFILE_PICTURE,
//         payload: url
//     }
// }