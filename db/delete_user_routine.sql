DELETE FROM user_workout WHERE user_routine_id = $1;
DELETE FROM user_routine WHERE user_routine_id = $1;