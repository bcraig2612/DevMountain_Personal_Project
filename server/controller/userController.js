module.exports = {
    getUser: (req, res, next) => {
        const { user_id } = req.params;
        const db = req.app.get("db");
        db.get_user(user_id).then(user => {
            res.status(200).send(user);
        })
    },
    getAllUsers: (req, res, next) => {
        const db = req.app.get("db");
        db.get_all_users().then(users => {
            res.status(200).send(users);
        })
    },
    updateDetails: (req, res, next) => {
        const { user_id } = req.params;
        const db = req.app.get("db");
        const {
            height, 
            weight, 
            bmi, 
            body_fat_percentage, 
            neck_measurement, 
            shoulder_measurement, 
            upper_arms_measurement, 
            chest_measurement, 
            waist_measurement, 
            thighs_measurement, 
            calves_measurement,
            bench_press_max, 
            squat_max, 
            deadlift_max,
            } = req.body;
          db.update_user_details(
            height, 
            weight, 
            bmi, 
            body_fat_percentage, 
            neck_measurement, 
            shoulder_measurement, 
            upper_arms_measurement, 
            chest_measurement, 
            waist_measurement, 
            thighs_measurement, 
            calves_measurement,
            bench_press_max, 
            squat_max, 
            deadlift_max,
            user_id ).then(users => {
            res.status(200).send(users);
          });
    },
    updateInfo: (req, res, next) => {
        const { user_id } = req.params;
        const db = req.app.get('db');
        const {
            profile_picture,
            first_name,
            last_name,
            sex,
            password,
            user_name,
            email
         } = req.body;
        db.update_user_info(
            profile_picture,
            first_name,
            last_name,
            sex,
            password,
            user_name,
            email,
            user_id).then(users => {
            res.status(200).send(users);
        });

    }
};

