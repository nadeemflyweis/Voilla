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

  const {
    field,
    name,
    email,
    password,
    contact,
    designation,
    image,
    charges,
    skills,
    about,
    experience,
    socialLink,
    status,
  } = req.body;

  bcrypt.hash(password, 10, function (err, hash) {
    if (err) {
      return res.json({
        msg: "Somthing Wrong, Try Later !",
        err: err,
      });
      
    } else {
      var user = new UserDB({
        field:field,
        name: name,
        email: email,
        password: hash,
        contact: contact,
        designation: designation,
        image: image,
        charges:charges,
        skills: skills,
        about: about,
        experience: experience,
        socialLink: socialLink,
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
            mesaage: err.message || "some error occured while creating User",
          });
        });
    }
  });
};
