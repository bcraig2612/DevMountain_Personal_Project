DROP TABLE IF EXISTS users;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(48) NOT NULL UNIQUE,
    user_name VARCHAR(24) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    first_name VARCHAR(24) NOT NULL,
    last_name VARCHAR(24) NOT NULL,
    profile_picture TEXT,
    sex VARCHAR(6) NOT NULL,
    height_feet INTEGER,
    height_inches INTEGER,
    weight DECIMAL,
    bmi DECIMAL,
    body_fat_percentage DECIMAL,
    neck_measurement DECIMAL,
    shoulder_measurement DECIMAL,
    upper_arms_measurement DECIMAL,
    chest_measurement DECIMAL,
    waist_measurement DECIMAL,
    thighs_measurement DECIMAL,
    calves_measurement DECIMAL,
    bench_press_max INTEGER,
    squat_max INTEGER,
    deadlift_max INTEGER
);

DROP TABLE IF EXISTS default_routine;

CREATE TABLE default_routine(
    default_routine_id SERIAL PRIMARY KEY,
    day VARCHAR(12),
    routine_name VARCHAR(36),
    muscle_groups VARCHAR(36),
    how_to VARCHAR(300)
);

DROP TABLE IF EXISTS default_workout;

CREATE TABLE default_workout(
    default_workout_id SERIAL PRIMARY KEY,
    muscle_groups VARCHAR(36),
    workout_name VARCHAR(36),
    image_url TEXT,
    required_equipment VARCHAR(48),
    how_to VARCHAR(300),
    default_reps VARCHAR(3),
    default_sets VARCHAR(3),
    default_routine_id INT REFERENCES default_routine(default_routine_id)
);

DROP TABLE IF EXISTS user_routine;

CREATE TABLE user_routine(
    user_routine_id SERIAL PRIMARY KEY,
    day VARCHAR(12),
    routine_name VARCHAR(36),
    muscle_groups VARCHAR(36),
    how_to VARCHAR(300),
    user_id INT REFERENCES users(user_id)
);

DROP TABLE IF EXISTS user_workout;

CREATE TABLE user_workout(
    user_workout_id SERIAL PRIMARY KEY,
    workout_name VARCHAR(36),
    default_sets VARCHAR(3),
    default_reps VARCHAR(3),
    weight VARCHAR(4),
    user_routine_id INT REFERENCES user_routine(user_routine_id)
);