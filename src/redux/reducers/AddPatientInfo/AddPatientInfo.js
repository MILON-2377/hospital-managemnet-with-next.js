import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientIfo: {
    personalInfo: {},
    medicalInfo: {},
    identificationInfo: {},
  },
};

export const patientInfoSlice = createSlice({
  name: "patientInfo",
  initialState,
  reducers: {
    // patient info add state
    patientPersonInfoAdd: (state, action) => {
      state.patientIfo.personalInfo = {
        ...state.patientIfo.personalInfo,
        ...action.payload,
      };
    },

    // patient medical info add
    patientMedicalInfoAdd: (state, action) => {
      state.patientIfo.medicalInfo = {
        ...state.patientIfo.medicalInfo,
        ...action.payload,
      };
    },

    // patient indentification info add
    patientIdentificationInfoAdd: (state, action) => {
      state.patientIfo.identificationInfo = {
        ...state.patientIfo.identificationInfo,
        ...action.payload,
      };
    },
  },
});

export const { patientPersonInfoAdd, patientMedicalInfoAdd, patientIdentificationInfoAdd } =
  patientInfoSlice.actions;
export default patientInfoSlice.reducer;
