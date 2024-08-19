import mongoose from "mongoose";

const personalInfoSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  emergency_contact_name: { type: String, required: true },
  emergency_contact_phone: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  occupation: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

const primaryPhysicianSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const medicalInfoSchema = new mongoose.Schema({
  primaryPhysician: { type: primaryPhysicianSchema, required: true },
  insuranceProvider: { type: String, required: true },
  allergies: { type: String, required: true },
  family_medical_history: { type: String, required: true },
  insurance_policy_number: { type: String, required: true },
  current_medications: { type: String, required: true },
  past_medical_history: { type: String, required: true },
});

const identificationInfoSchema = new mongoose.Schema({
  identification_type: { type: String, required: true },
  identification_number: { type: String, required: true },
  consent_treatment: { type: Boolean, required: true },
  consent_disclosure: { type: Boolean, required: true },
  consent_privacy: { type: Boolean, required: true },
});

const patientSchema = new mongoose.Schema({
  personalInfo: { type: personalInfoSchema, required: true },
  medicalInfo: { type: medicalInfoSchema, required: true },
  identificationInfo: { type: identificationInfoSchema, required: true },
});

const PatientInformation =
  mongoose.models.patientInformation ||
  mongoose.model("patientInformation", patientSchema);
export default PatientInformation;
