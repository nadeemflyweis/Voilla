const mongoose = require("mongoose");

const investorSchema = new mongoose.Schema(
  {
    userObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    companyName: {
      type: String,
      require: true,
    },

    designation: {
      type: String,
    },

    linkedin: {
      type: String,
    },

    numberOfInvestments: {
      type: String,
    },

    nameOfInvestments: {
      type: String,
    },

    domainExpertise: {
      type: String,
    },

    sector: {
      type: String,
    },

    ticketSize: {
      type: String,
    },

    status: {
      type: String,
      require: true,
      default: "Active",
    },
  },
  { timestamps: true }
);

const Investor = mongoose.model("Investor", investorSchema);
module.exports = Investor;
