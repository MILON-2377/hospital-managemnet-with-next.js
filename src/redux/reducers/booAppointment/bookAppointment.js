import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookAppointment: {
    patientId: "",
    doctorId: "",
    appointmentDate: "",
    appointmentTime: "",
  },
};

export const bookAppointmentSlice = createSlice({
  name: "bookAppointment",
  initialState,
  reducers: {
    addBookAppointment: (state, action) => {
        state.bookAppointment = action.payload;
    },
  },
});

export const { addBookAppointment } = bookAppointmentSlice.actions;
export default bookAppointmentSlice.reducer;
