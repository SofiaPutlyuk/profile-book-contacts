import { createSlice } from "@reduxjs/toolkit";
import { getContacts , postContacts} from "../thunk/ThunkContacts";
const ContactsSlice = createSlice({
    name:"contacts",
    initialState:{
        items:[],
        error:null,
        isLoading:false
    },
    extraReducers:(builder) =>{
    //getContacts 
    builder 
    .addCase(getContacts.pending , (state ) => {
     state.isLoading = true 
     state.error = null
    })
    .addCase(getContacts.fulfilled , (state , action) => {
        state.isLoading = false 
        state.items.push(action.payload)
        state.error = null
    }) 
    .addCase(getContacts.rejected , (state , action) => {
        state.error = action.payload.message
    })
    //postContacts
    .addCase(postContacts.fulfilled , (state , action) => {
        state.items.push(action.payload)
        state.error = null
    })
    }
})
export default ContactsSlice.reducer