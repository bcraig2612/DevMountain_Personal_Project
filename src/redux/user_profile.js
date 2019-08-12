const initialState = {
    user_id: null,
    height: 0,
    weight: 0,
    bmi: 0,
    body_fat_percentage: 0,
    neck_measurement: 0,
    shoulder_measurement: 0,
    upper_arms_measurement: 0,
    chest_measurement: 0,
    waist_measurement: 0,
    thighs_measurement: 0,
    calves_measurement: 0,
    bench_press_max: 0,
    squat_max: 0,
    deadlift_max: 0
}

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const HEIGHT = 'HEIGHT'
const WEIGHT = 'WEIGHT'
const BMI = 'BMI'
const BODY_FAT_PERCENTAGE = 'BODY_FAT_PERCENTAGE'
const NECK_MEASUREMENT = 'NECK_MEASUREMENT'
const SHOULDER_MEASUREMENT = 'SHOULDER_MEASUREMENT'
const UPPER_ARMS_MEASUREMENT = 'UPPER_ARMS_MEASUREMENT'
const CHEST_MEASUREMENT = 'CHEST_MEASUREMENT'
const WAIST_MEASUREMENT = 'WAIST_MEASUREMENT'
const THIGHS_MEASUREMENT = 'THIGHS_MEASUREMENT'
const CALVES_MEASUREMENT = 'CALVES_MEASUREMENT'
const BENCH_PRESS_MAX = 'BENCH_PRESS_MAX'
const SQUAT_MAX = 'SQUAT_MAX'
const DEADLIFT_MAX = 'DEADLIFT_MAX'

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_USER_PROFILE:
            console.log('this is the user who is updating the profile', payload);
            return { ...state, profile: payload };
        case HEIGHT:
            return { ...state, height: payload };
        case WEIGHT:
            return { ...state, weight: payload };
        case BMI:
            return { ...state, bmi: payload };
        case BODY_FAT_PERCENTAGE:
            return { ...state, body_fat_percentage: payload };
        case NECK_MEASUREMENT:
            return { ...state, neck_measurement: payload };
        case SHOULDER_MEASUREMENT:
            return { ...state, shoulder_measurement: payload };
        case UPPER_ARMS_MEASUREMENT:
            return { ...state, upper_arms_measurement: payload };
        case CHEST_MEASUREMENT:
            return { ...state, chest_measurement: payload };
        case WAIST_MEASUREMENT:
            return { ...state, waist_measurement: payload };
        case THIGHS_MEASUREMENT:
            return { ...state, thighs_measurement: payload };
        case CALVES_MEASUREMENT:
            return { ...state, calves_measurement: action.payload };
        case BENCH_PRESS_MAX:
            return { ...state, bench_press_max: action.payload };
        case SQUAT_MAX:
            return { ...state, squat_max: action.payload };
        case DEADLIFT_MAX:
            return { ...state, deadlift_max: action.payload };
        default:
            return state;
    }
}

// function to populate registered user-profile with user-profile data
export function setUserProfile(profile) {
    return {
        type: SET_USER_PROFILE,
        payload: profile
    }
}
export function insertHeight(height) {
    return {
        type: HEIGHT,
        payload: height
    }
}
export function insertWeight(weight) {
    return {
        type: WEIGHT,
        payload: weight
    }
}
export function insertBMI(bmi) {
    return {
        type: BMI,
        payload: bmi
    }
}
export function insertBodyFatPercentage(percentage) {
    return {
        type: BODY_FAT_PERCENTAGE,
        payload: percentage
    }
}
export function insertNeckMeasurement(neck) {
    return {
        type: NECK_MEASUREMENT,
        payload: neck
    }
}
export function insertShoulderMeasurement(shoulder) {
    return {
        type: SHOULDER_MEASUREMENT,
        payload: shoulder
    }
}
export function insertUpperArmsMeasurement(arms) {
    return {
        type: UPPER_ARMS_MEASUREMENT,
        payload: arms
    }
}
export function insertChestMeasurement(chest) {
    return {
        type: CHEST_MEASUREMENT,
        payload: chest
    }
}
export function insertWaistMeasurement(waist) {
    return {
        type: WAIST_MEASUREMENT,
        payload: waist
    }
}
export function insertThighsMeasurement(thighs) {
    return {
        type: THIGHS_MEASUREMENT,
        payload: thighs
    }
}
export function insertCalvesMeasurement(calves) {
    return {
        type: CALVES_MEASUREMENT,
        payload: calves
    }
}
export function insertBenchPressMax(benchpress) {
    return {
        type: BENCH_PRESS_MAX,
        payload: benchpress
    }
}
export function insertSquatMax(squat) {
    return {
        type: SQUAT_MAX,
        payload: squat
    }
}
export function insertDeadliftMax(deadlift) {
    return {
        type: DEADLIFT_MAX,
        payload: deadlift
    }
}