import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide a eamil"],
    unique: true,
  },

  profession: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: String,
    default: uuidv4,
  },
});

const Users = mongoose.models.users || mongoose.model("users", userSchema);
export default Users;
