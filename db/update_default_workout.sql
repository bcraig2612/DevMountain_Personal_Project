UPDATE default_workout
SET 
    muscle_groups = $1,
    workout_name = $2,
    image_url = $3,
    required_equipment = $4,
    how_to = $5,
    default_reps = $6,
    default_sets = $7
WHERE default_workout_id = $8 