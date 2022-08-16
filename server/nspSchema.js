const mongoose = require("mongoose");
const nspUserSchema = new mongoose.Schema({
  domicile: {
    type: String,
    require: true,
  },
  scholarshipCat: {
    type: String,
    require: true,
  },
  schemeType: {
    type: String,
    require: true,
  },
  stdName: {
    type: String,
    require: true,
  },

  dob: {
    type: Date,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  mobNumber: {
    type: Number,
    require: true,
    max: 10,
    min: 10,
  },
  email: {
    type: String,
  },
  IFSC: {
    type: String,
    require: true,
  },
  accNumber: {
    type: Number,
    require: true,
  },
  identification: {
    type: Number | String,
    require: true,
  },
});

const nspSchema = mongoose.model("std", nspUserSchema);
module.export = nspSchema;
