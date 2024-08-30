import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
    },
    doctor: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
    },
    doctorComments: {
      type: String,
      default: "",
    },
    approved: {
      type: Boolean,
      default: false,
    },
    rejected: {
      type: Boolean,
      default: false,
    },

    rejected_reason: {
      type: String,
    },
    appointment_date: {
      type: Date,
      required: true,
    },
  },
  { strict: false }
);

appointmentSchema.index({
  "patient.name": "text",
});

const Appointments =
  mongoose.models.appointments ||
  mongoose.model("appointments", appointmentSchema);
export default Appointments;
