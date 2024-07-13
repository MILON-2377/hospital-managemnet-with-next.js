import mongoose from "mongoose";

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
    professiion: { 
        type: String,
        required:[true, "Please provide your profession"],
    },
    DateOfBirth:{
        type:String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    
});

const Users = mongoose.models.users || mongoose.model("users",userSchema);
export default Users;