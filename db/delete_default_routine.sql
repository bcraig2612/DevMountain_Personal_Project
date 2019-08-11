DELETE FROM default_workout WHERE default_routine_id = $1;
DELETE FROM default_routine WHERE default_routine_id = $1;