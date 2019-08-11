# Fitness Maestro

## User_Side

### Dependencies
- axios 
- react
- react-router-dom (BrowserRouter)
- redux
- react-redux
- node-sass (not required)
- react-icons/fa (font)
- http-proxy-middleware
- redux-promise-middleware

### Routes
/ --> Login

/Register --> Register.js

/ForumSubmit --> ForumSubmit.js

/ForumView --> ForumView.js

/RegimenCreator --> RegimenCreator.js

/MuscleGroups/:routine_id/:muscle_groups --> MuscleGroups.js

/UserPage --> UserPage.js

/UserStats --> UserStats.js

/Regimen/:regimen_id --> Regimen.js

/Regimens --> Regimens.js

/BMI --> BMI.js

### User_Side File Structure
- src/
    - components/
        - Login/
            - Login.js
            - Login.css / .scss
        - Register/
            - Register.js
            - Register.css / .scss
        - UserStats/
            - UserStats.js
            - UserStats.css / .scss
        - Regimen/
            - Regimen.js
            - Regimen.css / .scss
        - Regimens/
            - Regimens.js
            - Regimens.css / .scss
        - BMI/
            - BMI.js
            - BMI.css / .scss
        - UserPage/
            - UserPage.js
            - UserPage.css / .scss  
        - ForumView/
            - ForumView.js
            - ForumView.css / .scss
        - ForumSubmit/
            - ForumSubmit.js
            - ForumSubmit.css / .scss
        - RegimenCreator/
            - RegimenCreator.js
            - RegimenCreator.css / .scss
        - MuscleGroups/
            - MuscleGroups.js
            - MuscleGroups.css / .scss
    - App.js
    - App.css
    - App.test.js
    - index.js
    - index.css
    - reset.css
    - setupProxy.js
    - serviceWorker.js
    - Router.js
    - redux/
        - store.js
        - reducer.js

## Server_Side

### Dependencies
- express
- express-session
- massive
- dotenv
- bcrypt

### Server File Structure
- server/
    - index.js
    - controller /
        - authController.js
        - workoutsController.js
    - middlewares /
        - middleware.js

### Endpoints
**Exercise Endpoints** 
- app.get("/api/workouts", getExercises);
- app.post("/api/workouts/:user_id", addExercise);
- app.put("/api/workouts/:id", updateExercise);
- app.delete("/api/workouts/:exercise_id/:user_id", deleteUserExercise)

**Auth Endpoints**
- app.post('/api/login', login);
- app.get('/api/logout', logout);
- app.post('/api/register', register);
- app.get('/api/user_session', userSession);
- app.get('/api/users', getUsers);
- app.delete('/api/obliterate', deleteUser);

## Database
- db /
    -add_default_workout.sql
    -add_user_workout.sql
    -check_if_user_exists.sql
    -create_regimen_workout.sql
    -create_routine.sql
    -create_user.sql
    -delete_routine.sql
    -delete_user.sql
    -delete_user_workout.sql
    -filter_workouts.sql
    -get_routine.sql
    -get_routine_workouts.sql
    -get_routines.sql
    -get_user.sql
    -get_user_workout.sql
    -get_workout.sql
    -get_workouts.sql
    -seed.sql
    -update_user.sql
    -update_user_stats.sql
    -user_search.sql