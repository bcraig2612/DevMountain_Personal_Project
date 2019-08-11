module.exports = {
    // (GET REQUEST)
    getDefaultWorkout:  (req, res, next) => {
        const { default_workout_id } = req.params;
        const db = req.app.get('db');
        // console.log('Hit default_workouts endpoint.');
        db.get_default_workout(default_workout_id).then(workout => {
            res.status(200).send(workout);
        });
    },
    // (GET REQUEST)    
    allDefaultWorkouts: (req, res, next) => {
        const db = req.app.get('db');
        // console.log('Hit grab_by_muscle_group endpoint.');
        db.get_default_workouts().then(workout => {
            res.status(200).send(workout);
        })
    },
    // ( POST REQUEST )
    postUserWorkout: (req, res, next) => {
        const {
            workout_name, 
            default_sets, 
            default_reps, 
            weight, 
            user_routine_id } = req.body;
        const db = req.app.get('db');
        db.create_user_workout(
            workout_name, 
            default_sets, 
            default_reps, 
            weight, 
            user_routine_id
        )
        .then( workout => {
            res.status(200).send(workout);
        })
    },
    // ( POST REQUEST )
    postDefaultWorkout: (req, res, next) => {
        const {
            muscle_groups,
            workout_name, 
            image_url,
            required_equipment,
            how_to,
            default_reps,
            default_sets,
            default_routine_id } = req.body;
        const db = req.app.get('db');
        db.create_default_workout(
            muscle_groups,
            workout_name,
            image_url,
            required_equipment,
            how_to,
            default_reps,
            default_sets,
            default_routine_id ) 
            .then( workout => {
                res.status(200).send(workout);
            })
    },
    // ( DELETE REQUEST )
    removeDefaultWorkout: (req, res, next) => {
        const { default_workout_id } = req.params;
        const db = req.app.get('db');
        db.delete_default_workout(default_workout_id)
        .then(workout => {
            res.status(200).send(workout);
        })
    },
    // ( DELETE REQUEST )
    removeUserWorkout: (req, res, next) => {
        const { user_workout_id, user_routine_id } = req.params;
        const db = req.app.get('db');
        db.delete_user_workout(user_workout_id, user_routine_id)
        .then(workout => {
            res.status(200).send(workout);
        })
    }
};