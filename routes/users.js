var express = require('express');
var router = express.Router();
const md5 = require("md5");
const User = require('../models/userSchema');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/signup",(req, res) => {

  try {
      const userData = req.body;

      const newUser = new User({
          name: userData.name,
          email :userData.email,
          phone: userData.phone,
          password: md5(userData.password),
          work: userData.work
  
      });
      newUser.save();
      res.json ({status: 200, message: "User successfully registered"});
  } catch (error) {
      throw new Error("Unable to register user", error);
  }
})

router.post("/signin", async (req, res) => {

      const {email , password} = req.body;

      if(!email){
          return res.status(400).json({error: "Email cannot be empty"})
      }

      if(!password){
          return res.status(400).json({error: "Password cannot be empty"})
      }

      try {
          const user = await User.findOne({email: email});
          const oldPassword = user?.password;
          const signInPassword = md5(password);

          if(user && (oldPassword === signInPassword)){
              return res.status(200).json({message: "Successfully logged in!"})
          }else {
              return res.status(400).json({error: "Invalid username OR password"});
          }

      } catch (error) {
          return res.status(400).json({error: "Error validating user credentials"});
      }
  }
);

module.exports = router;
