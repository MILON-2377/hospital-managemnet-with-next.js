import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patientIfo:{},
};

export const patientInfoSlice = createSlice({
    name:"patientInfo",
    initialState,
    reducers: {

        // patient info add state
        patientInfoAdd: (state, action) => {
            state.patientIfo = {...state.patientIfo, ...action.payload};
            console.log(state.patientIfo);
        },
    }
});

export const {patientInfoAdd} = patientInfoSlice.actions;
export default patientInfoSlice.reducer;