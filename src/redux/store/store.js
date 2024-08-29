import { configureStore } from "@reduxjs/toolkit";
import patientInfoReducer from "../reducers/AddPatientInfo/AddPatientInfo";
import doctorReducer from "../reducers/AddDoctorSlice/addDoctorSlice";
import bookAppointmentReducer from "../reducers/booAppointment/bookAppointment";

const store = configureStore({
    reducer: {
        patientInfoReducer,
        doctorReducer,
        bookAppointmentReducer,
    }
});
export default store;