import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser , postRegisterUser} from "../thunk/ThunkRegister";
const RegisterSlice = createSlice({
    name: "register",
    initialState: {
        isLoading:false,
        name: "",
        email: "",
        password: "",
        error:null,
        token:null
    },
    extraReducers: (builder) => {
        builder
            //getCurrentUser
            .addCase(getCurrentUser.pending , (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getCurrentUser.fulfilled , (state , action) => {
                state.isLoading = false
                state.name = action.payload
                state.email = action.payload
                state.error = null
            })
            .addCase(getCurrentUser.rejected , (state , action) => {
                state.error = action.error.message
            })
            //postRegisterUser
            .addCase(postRegisterUser.fulfilled , (state , action) => {
                state.name = action.payload
                state.email = action.payload
                state.password = action.payload
                state.token = action.payload.token
                state.error = null
            })
    }
})
export default RegisterSlice.reducer