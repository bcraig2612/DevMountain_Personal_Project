module.exports = {
    getDefaultWorkout:  (req, res, next) => {
        const { default_workout_id } = req.params;
        const db = req.app.get('db');
        // console.log('Hit default_workouts endpoint.');
        db.get_default_workout(default_workout_id).then(workout => {
            res.status(200).send(workout);
        });
    },    
    allDefaultWorkouts: (req, res, next) => {
        const db = req.app.get('db');
        // console.log('Hit grab_by_muscle_group endpoint.');
        db.get_default_workouts().then(workout => {
            res.status(200).send(workout);
        })
    }
};