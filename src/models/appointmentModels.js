import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "this is field is required"],
  },
  dateOfBirth: {
    type: String,
    required: [true, "date of birth is required"],
  },
  reason: {
    type: String,
    required: [true, "reason is required"],
  },
  appointmentMethod: {
    type: String,
    required: [true, "appointment method is required"],
  },
  Doctors: {
    type: String,
    required: [true, "doctors filed is required"],
  },
  email: {
    type: String,
    required: [true, "emial is required"],
  },
  appointmentDate: {
    type: Date,
    required: [true, "this is required"],
  },
  approved: {
    type: Boolean,
    default: false
  },
});

const Appointments =
  mongoose.models.appointments ||
  mongoose.model("appointments", appointmentSchema);
export default Appointments;
