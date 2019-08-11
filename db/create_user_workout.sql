INSERT INTO user_workout
(workout_name, default_sets, default_reps, weight, user_routine_id)
VALUES 
($1, $2, $3, $4, $5);
