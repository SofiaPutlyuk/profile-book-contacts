import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slice/RegisterSlice"
const store = configureStore({
    reducer:{
        register:registerReducer
    }
})
export default store;