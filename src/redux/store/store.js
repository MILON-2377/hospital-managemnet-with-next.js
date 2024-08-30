import { configureStore } from "@reduxjs/toolkit";
import patientInfoReducer from "../reducers/AddPatientInfo/AddPatientInfo";
import doctorReducer from "../reducers/AddDoctorSlice/addDoctorSlice";
import bookAppointmentReducer from "../reducers/booAppointment/bookAppointment";
import doctorInfoReducer from "../reducers/AddDoctorSlice/addDoctorInfo";

const store = configureStore({
  reducer: {
    patientInfoReducer,
    doctorReducer,
    bookAppointmentReducer,
    doctorInfoReducer,
  },
});
export default store;
