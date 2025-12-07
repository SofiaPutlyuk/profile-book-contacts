import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api = axios.create({
    baseURL: "https://connections-api.goit.global",
    headers: {
        "Content-Type": "application/json",
    },
})
export const postLoginUser = createAsyncThunk("login/postLoginUser", async ({ email, password }, thunkApi) => {
    try {
        const { data } = await api.post("/users/login", { email, password }, { headers: { "Content-Type": "application/json" } })
        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`
        console.log(data)
        return data;
    } catch(error){
        return thunkApi.rejectWithValue(error.message)
    }
    
})
export const patchLoginUser = createAsyncThunk("logout/patchLoginUser" , async(_ , thunkApi) => {
    try {
   const  {data} = await api.put("/users/logout")
   delete axios.defaults.headers.common.Authorization ;
   return data
    } catch(error){
        return thunkApi.rejectWithValue(error.message)
    }
})