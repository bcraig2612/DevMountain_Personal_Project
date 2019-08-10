DELETE FROM user_workout 
WHERE user_workout_id = $1 
AND user_routine_id = $2; 