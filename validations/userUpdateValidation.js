const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let error = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";

  if (Validator.isEmpty(data.name)) {
    error.name = "Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    error.email = "E-mail field is required";
  }
  if (Validator.isEmail(data.email)) {
    error.email = "Must be a valid E-mail";
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
