import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patientIfo:{
        personalInfo : {},
        medicalInfo: {},
        identificationInfo: {},
    },
};

export const patientInfoSlice = createSlice({
    name:"patientInfo",
    initialState,
    reducers: {

        // patient info add state
        patientPersonInfoAdd: (state, action) => {
            state.patientIfo.personalInfo = {...state.patientIfo.personalInfo, ...action.payload};
        },
    }
});

export const {patientPersonInfoAdd} = patientInfoSlice.actions;
export default patientInfoSlice.reducer;