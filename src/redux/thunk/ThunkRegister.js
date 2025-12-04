import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api = axios.create({
  baseURL: "https://connections-api.goit.global",
  headers: {
    "Content-Type": "application/json",
  },
});
export const getCurrentUser = createAsyncThunk("register/getCurrentUser", async (_, thunkApi) => {
    try {
        const { data } = await api.get("/users/current")
        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`
        console.log(data)
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }

})
export const postRegisterUser = createAsyncThunk("register/postRegisterUser", async ({ name, email, password }, thunkApi) => {
    try {
        const { data } = await api.post("/users/signup", { name, email, password } , { headers: { "Content-Type": "application/json" } })
        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`
        console.log(data)
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data?.message || error.message)
    }

})
