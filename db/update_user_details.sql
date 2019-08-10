UPDATE users
SET
    height=$1, 
    weight=$2, 
    bmi=$3, 
    body_fat_percentage=$4, 
    neck_measurement=$5, 
    shoulder_measurement=$6, 
    upper_arms_measurement=$7, 
    chest_measurement = $8, 
    waist_measurement = $9, 
    thighs_measurement = $10, 
    calves_measurement = $11,
    bench_press_max = $12, 
    squat_max = $13, 
    deadlift_max = $14
WHERE user_id = $15