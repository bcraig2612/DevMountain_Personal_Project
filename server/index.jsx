require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.json());

const { login, logout, register, userSession } = require('./controller/authController');
const { getUserRoutines, postUserRoutine, getUserRoutineWorkouts, removeUserRoutine } = require('./controller/routineController');
const { getUser, getAllUsers, updateDetails, updateInfo } = require('./controller/userController');     
const { getDefaultWorkout, allDefaultWorkouts } = require('./controller/workoutController');
                
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;
                
massive(CONNECTION_STRING).then((db) => {
    app.set('db', db);
    console.log('The database is connected.');
});
                
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14 // 2-weeks
    }
  })
);
// auth endpoints 
app.post('/api/login', login);
app.post('/api/register', register);
app.get('/api/user_session', userSession);
app.get('/api/logout', logout);

// user endpoints
app.get('/api/get_user/:user_id', getUser);
app.get('/api/get_all_users', getAllUsers);
app.patch('/api/update_user_details/:user_id', updateDetails);
app.patch('/api/update_user_info/:user_id', updateInfo);

// user_routine endpoints 
app.get('/api/user_routine/:user_id', getUserRoutines);
app.get('/api/user_routines/:user_routine_id/:user_workout_id', getUserRoutineWorkouts);
app.post('/api/user_routine', postUserRoutine);
app.delete('/api/delete_user_routine/:user_routine_id', removeUserRoutine);

// default_workout endpoints
app.get('/api/default_workout/:default_workout_id', getDefaultWorkout);
app.get('/api/default_workout', allDefaultWorkouts);

app.listen(SERVER_PORT, () => console.log(`listening on server port ${SERVER_PORT}`));