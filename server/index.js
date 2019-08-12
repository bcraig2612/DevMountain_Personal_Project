require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.json());

const { login, 
        logout, 
        register, 
        userSession } = require('./controller/authController');
        
const { getUserRoutines, 
        postUserRoutine, 
        getUserRoutineWorkouts, 
        removeUserRoutine, 
        postDefaultRoutine, 
        removeDefaultRoutine } = require('./controller/routineController');

const { getUser, 
        getAllUsers, 
        updateDetails, 
        updateInfo } = require('./controller/userController');     

const { getDefaultWorkout, 
        allDefaultWorkouts, 
        postDefaultWorkout,
        postUserWorkout, 
        removeDefaultWorkout,
        removeUserWorkout } = require('./controller/workoutController');
                
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

// checkLoggedIn endpoint (1)
const checkLoggedIn = require('./middleware')
app.get('/api/check_logged_in', checkLoggedIn);

// auth endpoints (4)
app.post('/auth/login', login);
app.post('/auth/register', register);
app.get('/auth/user_session', userSession);
app.get('/auth/logout', logout);

// user endpoints (4)
app.get('/api/get_user', getUser);
app.get('/api/get_all_users', getAllUsers);
app.patch('/api/update_user_details/:user_id', updateDetails);
app.patch('/api/update_user_info/:user_id', updateInfo);

// routine endpoints (6)
app.get('/api/user_routine/:user_id', getUserRoutines);
app.get('/api/user_routines/:user_routine_id/:user_workout_id', getUserRoutineWorkouts);
app.post('/api/user_routine', postUserRoutine);
app.post('/api/default_routine', postDefaultRoutine);
app.delete('/api/delete_user_routine/:user_routine_id', removeUserRoutine);
app.delete('/api/delete_default_routine/:default_routine_id', removeDefaultRoutine);

// workout endpoints (6)
app.get('/api/default_workout/:default_workout_id', getDefaultWorkout);
app.get('/api/default_workout', allDefaultWorkouts);
app.post('/api/default_workout', postDefaultWorkout);
app.post('/api/user_workout', postUserWorkout);
app.delete('/api/delete_default_workout/:default_workout_id', removeDefaultWorkout);
app.delete('/api/delete_user_workout/:user_workout_id/:user_routine_id', removeUserWorkout);

app.listen(SERVER_PORT, () => console.log(`listening on server port ${SERVER_PORT}`));