const UserDB = require("../../modules/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//------------- Load input validations--------------
const validateRegisterInput = require("../../validations/userValidation");

module.exports = (req, res, next) => {
  const { error, isValid } = validateRegisterInput(req.body);

  // --------------- Check Validation -------------------
  if (!isValid) {
    return res.status(400).json(error);
  }

  const { name, jobTitle, password, email, contact, designation, status } =
    req.body;

  bcrypt.hash(password, 10, function (err, hash) {
    if (err) {
      return res.json({
        msg: "Somthing Wrong, Try Later !",
        err: err,
      });
    } else {
      var user = new UserDB({
        name: name,
        jobTitle: jobTitle,
        password: hash,
        email: email,
        contact: contact,
        status: status,
      });
      user
        .save()
        .then((result) => {
          res.status(201).json({
            msg: "Data Added successfully",
            result: result,
          });
        })
        .catch((err) => {
          res.status(500).send({
            mesaage: err.message || "some error occured while creating data",
          });
        });
    }
  });
};
