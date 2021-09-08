const InvestorDB = require("../../modules/investorModel");

// Load input validations
const validateRegisterInput = require("../../validations/investorValidation");

module.exports = (req, res, next) => {
  const { error, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(error);
  }

  const {
    userObjectId,
    companyName,
    designation,
    linkedin,
    numberOfInvestments,
    nameOfInvestments,
    domainExpertise,
    sector,
    ticketSize,
    status,
  } = req.body;

  const investor = new InvestorDB({
    userObjectId: userObjectId,
    companyName: companyName,
    designation: designation,
    linkedin: linkedin,
    numberOfInvestments: numberOfInvestments,
    nameOfInvestments: nameOfInvestments,
    domainExpertise: domainExpertise,
    sector: sector,
    ticketSize: ticketSize,
    status: status,
  });
  investor
    .save()
    .then((data) => {
      res.status(201).json({
        msg: "Data added successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
