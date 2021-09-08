var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var AdminDB = require("../../modules/adminModel");

if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  AdminDB.findOne({ email: email })
    .exec()
    .then((result) => {
      if (result.length < 1) {
        res.status(201).json({
          msg: "Invalid user information",
        });
      } else {
        bcrypt.compare(password, result.password, function (err, data) {
          if (err) {
            res.status(201).json({
              msg: "Authorization faild",
            });
          }
          if (data) {
            var authtoken = jwt.sign(
              {
                Id: result._id,
                name: result.name,
                email: result.email,
              },
              "secret",
              {
                expiresIn: "12h",
              }
            );
            res.status(201).json({
              msg: "Login Succesfully",
              authtoken: "bearer "+authtoken,
            });
          } else {
            res.json({
              msg: "User password wrong",
            });
          }
        });
      }
    })
    .catch((err) => {
      res.json({
        error: err,
        msg: "User/password wrong",
      });
    });
};
