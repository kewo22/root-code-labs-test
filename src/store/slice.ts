import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../interfaces/initialState"; 

const initialState: InitialState = {
    vehicleBids: []
}

export const vehicleSlice = createSlice({
    name: 'vehicleBid',
    initialState,
    reducers: {
        addVehicle: (state, action) => {
            state.vehicleBids.push(action.payload)
        }
    }
})

export const { addVehicle } = vehicleSlice.actions;

export default vehicleSlice.reducer;