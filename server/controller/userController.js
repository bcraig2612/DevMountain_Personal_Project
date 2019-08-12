module.exports = {
    getUser: (req, res, next) => {
        console.log('HIT getUser');
        const db = req.app.get("db");
        const userID = req.session.user.user_id;
        db.get_user([userID]).then(user => {
            res.status(200).send(user[0]);
        }).catch((err) => {
            console.log(err)
            res.status(500).send()
        });
    },
    getAllUsers: (req, res, next) => {
        const db = req.app.get("db");
        db.get_all_users().then(users => {
            res.status(200).send(users);
        }).catch(err => {
            console.log(err)
            res.status(500).send()
        });
    },
    updateDetails: (req, res, next) => {
        const { user_id } = req.params;
        const db = req.app.get("db");
        const {
            height_feet,
            height_inches, 
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
            height_feet,
            height_inches, 
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
          }).catch(err => {
            console.log(err)
            res.status(500).send()
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
        }).catch(err => {
            console.log(err)
            res.status(500).send()
        });
    }
};

