import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./list/listSlice"

export const store = configureStore({
    reducer:{
        list : listSlice,
    }
})