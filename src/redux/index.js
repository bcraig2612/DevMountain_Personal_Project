import { combineReducers } from 'redux';
import user_profile from './user_profile';
import user_login from './user_login';
import user_register from './user_register';

export default combineReducers({
    user_profile,
    user_register,
    user_login
});