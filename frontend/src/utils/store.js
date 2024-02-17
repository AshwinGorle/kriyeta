import { configureStore } from "@reduxjs/toolkit";
import refSlice from "./refSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer : {
        refSlice : refSlice,
        userSlice : userSlice
    }
})

export default store;