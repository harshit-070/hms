const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema(
  {
    NHID: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    gender: { type: Number, required: true },
    age: { type: Number, required: true },
    address: { type: String },
    xRayReports: [{ type: String }],
    medicalReports: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const PatientModel = mongoose.model("Patient", PatientSchema);

module.exports = PatientModel;