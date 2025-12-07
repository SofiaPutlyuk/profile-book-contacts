import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTJlNzczODEwYWFkMjA1ZjJkZDczNWEiLCJpYXQiOjE3NjUwMzU2MjB9.L-g1VPUAU7E6s8bYpATM-Q4DbPloHeta6PSZJFiPV3k"
const api = axios.create({
    baseURL: "https://connections-api.goit.global",
    headers: {
        "Content-Type": "application/json",
    },
})
export const getContacts = createAsyncThunk("contacts/getContacts", async (_, thunkApi) => {
    try {
        const { data } = await api.get("/contacts", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }

})
export const postContacts = createAsyncThunk("contacts/postContacts", async ({ name, number }, thunkApi) => {
    try {
        const {data} = await api.post("/contacts",
            { name, number },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})