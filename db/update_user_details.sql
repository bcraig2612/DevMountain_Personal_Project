UPDATE users
SET
    height_feet=$1,
    height_inches=$2, 
    weight=$3, 
    bmi=$4, 
    body_fat_percentage=$5, 
    neck_measurement=$6, 
    shoulder_measurement=$7, 
    upper_arms_measurement=$8, 
    chest_measurement = $9, 
    waist_measurement = $10, 
    thighs_measurement = $11, 
    calves_measurement = $12,
    bench_press_max = $13, 
    squat_max = $14, 
    deadlift_max = $15
WHERE user_id = $16