import mongoose from "mongoose";

const patientInfoSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        
      },
      email: {
        type: String,
        required: true,
        unique: true,
       
      },
      date_of_birth: {
        type: Date,
        required: true,
        validate: {
          validator: function(value) {
            return value <= new Date(); // Ensure date of birth is not in the future
          },
          message: 'Date of birth cannot be in the future',
        },
      },
      address: {
        type: String,
        required: true,
        
      },
      phoneNumber: {
        type: String,
        required: true,
        
      },
      gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other'],
      },
      identification_type: {
        type: String,
        required: true,
      },
      identification_number: {
        type: String,
        required: true,
        unique: true,
      },
      insuranceProvider: {
        type: String,
        required: true,
      },
      insuranceNumber: {
        type: String,
        required: true,
      },
      insurance_policy_number: {
        type: String,
        required: true,
      },
      occupation: {
        type: String,
        required: true,
      },
      emergency_contact_name: {
        type: String,
        required: true,
        
      },
      emergency_contact_phone: {
        type: String,
        required: true,
        
      },
      past_medical_history: {
        type: String,
        required: true,
      },
      family_medical_history: {
        type: String,
        required: true,
      },
      current_medications: {
        type: String,
        required: true,
      },
      allergies: {
        type: String,
        required: true,
      },
      consent_treatment: {
        type: Boolean,
        required: true,
      },
      consent_privacy: {
        type: Boolean,
        required: true,
      },
      consent_disclosure: {
        type: Boolean,
        required: true,
      },
      selectedPhysician: {
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
      },
      identification_photo:{
        type : String,
        default : "",
      },
      patientId: {
        type: String,
        required: true,
      }
    });

const PatientInformation = mongoose.models.patientInformation || mongoose.model("patientInformation", patientInfoSchema);
export default PatientInformation;