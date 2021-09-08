const PartnerDB = require("../../modules/partnerModel");

// Load input validations
const validateRegisterInput = require("../../validations/partnerValidation");

module.exports = (req, res, next) => {
  const { error, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(error);
  }

  const {
    userObjectId,
    name,
    contact,
    jobTitle,
    category,
    skills,
    overview,
    experience,
    currentEmployee,
    linkedin,
    youtubeVideo,
    charges,
    resume,
    status,
  } = req.body;

  const partner = new PartnerDB({
    userObjectId: userObjectId,
    name: name,
    contact: contact,
    jobTitle: jobTitle,
    category: category,
    skills: skills,
    overview: overview,
    experience: experience,
    currentEmployee: currentEmployee,
    linkedin: linkedin,
    youtubeVideo: youtubeVideo,
    charges: charges,
    resume: resume,
    status: status,
  });
  partner
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
