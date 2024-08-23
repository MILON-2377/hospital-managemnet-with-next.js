import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    doctorId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    nextAvailability: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    lastBooked: {
      type: Date,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    }
  });

const Doctors = mongoose.models.allDoctors || mongoose.model("allDoctors", doctorSchema);
export default Doctors;
  