import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    doctor : {},
};

export const singleDoctorSlice = createSlice({
    name:"doctor",
    initialState,
    reducers: {
        addDoctor : (state, action) => {
            state.doctor = action.payload;
        },
    }
});

export const {addDoctor} = singleDoctorSlice.actions;
export default singleDoctorSlice.reducer;