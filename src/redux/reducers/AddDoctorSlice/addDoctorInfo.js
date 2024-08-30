import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctor: {
    basic: {},
    exprience: {},
    education: {},
  },
};

export const doctorInfoSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    // basic info
    addBasicInfo: (state, action) => {
      state.doctor.basic = action.payload;
    },

    // exprience
    addExprienceInfo: (state, action) => {
      state.doctor.exprience = action.payload;
    },

    // eduction
    addEducationInfo: (state, action) => {
      state.doctor.education = action.payload;
    },
  },
});

export const { addBasicInfo, addExprienceInfo, addEducationInfo } = doctorInfoSlice.actions;
export default doctorInfoSlice.reducer;
