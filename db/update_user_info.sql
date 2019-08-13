UPDATE users
SET 
    profile_picture = $1,
    first_name = $2, 
    last_name = $3,  
    sex = $4, 
    user_name = $5,
    email = $6
WHERE user_id = $7