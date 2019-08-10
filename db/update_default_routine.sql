UPDATE default_routine
SET 
    day = $1,
    routine_name = $2,
    muscle_groups = $3,
    how_to = $4
WHERE default_routine_id = $5