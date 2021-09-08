const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let error = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";
  data.jobTitle = !isEmpty(data.jobTitle) ? data.jobTitle : "";

  if (Validator.isEmpty(data.name)) {
    error.name = "Name field is required";
  }
  if (Validator.isEmpty(data.contact)) {
    error.contact = "Contact field is required";
  }
  if (Validator.isEmpty(data.jobTitle)) {
    error.jobTitle = "Job title field is required";
  }

  return {
    error,
    isValid: isEmpty(error),
  };
};
