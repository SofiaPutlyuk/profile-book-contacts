import { createSlice } from "@reduxjs/toolkit";
import { postLoginUser , patchLoginUser } from "../thunk/ThunkLogin";
const LoginSlice = createSlice({
    name:"login",
    initialState:{
        error:null,
        isLogin:false,
        currentUser:null
    },
    extraReducers:(builder) => {
    builder
    .addCase(postLoginUser.fulfilled , (state , action) => {
        state.isLogin = true 
        state.error = null
        state.currentUser = action.payload
        console.log(state.currentUser)
        console.log(state.isLogin)
    })
    .addCase(patchLoginUser.fulfilled , (state) => {
        state.isLogin = false;
        state.currentUser = null;
        state.error = null;
    })
    }
})
export default LoginSlice.reducer
