UPDATE users
SET 
    profile_picture = $1,
    first_name = $2, 
    last_name = $3,  
    sex = $4, 
    password = $5,
    user_name = $6,
    email = $7
WHERE user_id = $8