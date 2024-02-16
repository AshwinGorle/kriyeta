import { configureStore } from "@reduxjs/toolkit";
import refSlice from "./refSlice";

const store = configureStore({
    reducer : {
        refSlice : refSlice,
    }
})

export default store;