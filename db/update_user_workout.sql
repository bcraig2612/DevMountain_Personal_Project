UPDATE user_workout
SET  
    workout_name = $1,
    default_reps = $2,
    default_sets = $3,
    weight = $4
WHERE user_workout_id = $5