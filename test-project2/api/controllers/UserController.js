const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
module.exports = {
  signUp: async (req, res) => {
    let { email, password } = req.body;
    await bcrypt.hash(password, 8, async (err, hash) => {
      if (err) {
        console.log(err);
        res.send("Something Went Wrong");
      }
      const result = await User.create({
        email: email,
        password: hash,
      }).fetch();
      res.send({ messege: "Registered Successfully", result });
    }); 
  },

  login: async (req, res) => {
    let { email, password } = req.body;
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      bcrypt.compare(password, userLogin.password, function (err, result) {
        // console.log(err);
        // if(err){

        //     return res.send({messege:"Something Went Wrong"})
        // }
        if (result) {
          console.log(result);
          const token = jwt.sign(
            { email: userLogin.email, userId: userLogin.id },
            "shhhhh"
          );
          return res.send({ messege: "Login Successful", userLogin, token });
        } else {
          return res.send({ messege: "Something Went Wrong" });
        }
      });
    }
    // else{
    //     return res.send("Something Went Wrong from else")
    // }
  },

};
