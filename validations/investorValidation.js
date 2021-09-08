const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let error = {};

  data.companyName = !isEmpty(data.companyName) ? data.companyName : "";

  if (Validator.isEmpty(data.companyName)) {
    error.companyName = "Company name field is required";
  }
  

  return {
    error,
    isValid: isEmpty(error),
  };
};
