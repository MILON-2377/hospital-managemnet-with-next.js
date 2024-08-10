import { configureStore } from "@reduxjs/toolkit";
import patientInfoReducer from "../reducers/AddPatientInfo/AddPatientInfo";

const store = configureStore({
    reducer: {
        patientInfoReducer,
    }
});
export default store;