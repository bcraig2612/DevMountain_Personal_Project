INSERT INTO default_workout
(workout_name, image_url, required_equipment, how_to, default_reps, default_sets, default_routine_id)
VALUES 
($1, $2, $3, $4, $5, $6, $7);