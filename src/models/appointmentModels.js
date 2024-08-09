import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: [true, "this is field is required"],
  },
  appointment_reason: {
    type: String,
    required: [true, "reason is required"],
  },
  comments: {
    type: String,
    required: [true, "appointment method is required"],
  },
  doctor: {
    image:{
      type: String,
      required: true,
    },
    name: {
      type:String,
      required: true,
    }
  },
  expected_date: {
    type: Date,
    required: [true, "this is required"],
  },
  approved: {
    type: Boolean,
    default: false
  },
  appointment_date:{
    type: Date,
    default: new Date().toLocaleString(),
  }
});

const Appointments =
  mongoose.models.appointments ||
  mongoose.model("appointments", appointmentSchema);
export default Appointments;
