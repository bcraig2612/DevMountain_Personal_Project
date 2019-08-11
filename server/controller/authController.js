const bcrypt = require("bcrypt");

module.exports = {
  // ( POST REQUEST )
  login: async (req, res, next) => {
    try {
      console.log('HIT LOGIN');
      const db = req.app.get("db");
    const { user_name, password } = req.body;
    const foundUser = await db.check_if_user_exists([user_name]);
    const user = foundUser[0];
    if(!user) {
        return res.status(401).send('This user is not recognized.');
    }
    const isAuthenticated = await bcrypt.compareSync(password, user.password);
    if(!isAuthenticated) {
        return res.status(403).send('Access Denied');
    } else { 
    req.session.user = {
        user_name: user.user_name,
        user_id: user.id,
        email: user.email,
    };
    return res.status(200).send(req.session.user);
}
    } catch (err) {
      console(err);
      res.status(500).json(err);
    }
},
    // ( POST REQUEST )
    register: (req, res, next) => {
        try {
          console.log('HIT Register');
          const db = req.app.get('db');
          const {user_name, 
                 first_name, 
                 last_name, 
                 profile_picture, 
                 password, 
                 email, 
                 sex
                } = req.body;
          db.check_if_user_exists(user_name).then(foundUser => {
              if (foundUser.length) {
                  res.status(401).send("User Already Exist. Please Login.");
                  } else {
                    const saltRounds = 12;
                  bcrypt.genSalt(saltRounds).then(salt => {
                      bcrypt.hash(password, salt).then(hashedPassword => {
                        db.create_user([
                        user_name, 
                        first_name, 
                        last_name, 
                        profile_picture, 
                        hashedPassword, 
                        email, 
                        sex
                        ]).then(createdUser => {
                          req.session.user = createdUser[0];
                          res.status(200).send(req.session.user);
                        });
                      });
                    });
                  }
                });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
    },
    // ( GET REQUEST )
    logout: (req, res, next) => {
        console.log("It's ALIVE !!!");
        req.session.destroy();
        return res.status(200).send('Successfully Logged Out!');
    },
    // ( GET REQUEST )
    // use this for refresh purposes for the user to navigate through components without needing to repeatedly log back in. 
    userSession: (req, res, next) => {
        res.status(200).send(req.session.user);
    }
}