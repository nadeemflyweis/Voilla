const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let error = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";


  if (Validator.isEmpty(data.name)) {
    error.name = "Name field is required";
  }
  if (!Validator.isLength(data.name, { min: 3, max: 30 })) {
    error.name = "Name must be between 3 and 30 characters";
  }


  if (Validator.isEmpty(data.email)) {
    error.email = "E-mail field is required";
  }
  if (!Validator.isEmail(data.email)) {
    error.email = "must be a valid Email";
  }


  if (Validator.isEmpty(data.password)) {
    error.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    error.password = "Password must be between 6 to 30 characters";
  }

  
  if (Validator.isEmpty(data.contact)) {
    error.contact = "Contact field is required";
  }
  if (!Validator.isNumeric(data.contact)) {
    error.contact = "must be a valid contact";
  }

  return {
    error,
    isValid: isEmpty(error),
  };
};
