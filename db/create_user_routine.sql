INSERT INTO user_routine
(day, routine_name, muscle_groups, how_to, user_id)
VALUES($1, $2, $3, $4, $5);
SELECT day, routine_name, muscle_groups, how_to
FROM user_routine
WHERE user_id = $5