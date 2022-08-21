import { configureStore } from "@reduxjs/toolkit";

import vehicleReducer from './slice'

export const store = configureStore({
    reducer: {
        vehicles: vehicleReducer,
    }
})