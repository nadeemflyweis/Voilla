const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
  {
    userObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    name: {
      type: String,
    },

    contact: {
      type: String,
    },

    jobTitle: {
      type: String,
    },

    category: {
      type: String,
    },

    skills: {
      type: String,
    },

    overview: {
      type: String,
    },

    experience: {
      type: String,
    },

    currentEmployee: {
      type: String,
    },

    linkedin: {
      type: String,
    },

    youtubeVideo: {
      type: String,
    },

    charges: {
      type: String,
    },

    resume: {
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

const Partner = mongoose.model("Partner", partnerSchema);
module.exports = Partner;
