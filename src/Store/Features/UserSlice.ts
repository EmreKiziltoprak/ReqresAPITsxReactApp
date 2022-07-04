import {createAsyncThunk, createSlice, Store} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

import {RootState} from "../Store"
import {User, UserResponseModel} from "../../Types/User";
import {useFetch} from "../../Api/Http";
import url from "../../Api/Url";
import {useState} from "react";
import {json} from "stream/consumers";
import axios from "axios";

// Define a type for the slice state

export const fetchUsers = createAsyncThunk("fetchUsers", async (page: number) => {


    const response = await axios.get<UserResponseModel>(url + "/users")

    return response.data


})


//Interface for response of users
interface UserResponseState {
    data: UserResponseModel | null;
    loading: boolean;
    error: string;
}

// Define the initial state using that type
const initialState: UserResponseState = {
    data: null,
    loading: false,
    error: ""
}

export const usersSlice = createSlice({
    name: 'users',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

        addUser: (state, action: PayloadAction<UserResponseModel>) => {
            console.log(action.payload)
            state.data.data.push(...action.payload.data)
        }

    },
    extraReducers: (builder) => {

        builder.addCase(fetchUsers.pending,
            (state, action) => {
                console.log("PENDING")

                state.loading = true;
                state.error = "";
            })

        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserResponseModel>) => {
            state.data = action.payload;
            console.log("SUCCESS")
            state.loading = false;
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            console.log("REJECTED")

            state.error = "Error fetching user data";

        })

    }
})

export default usersSlice.reducer;
export const {addUser} = usersSlice.actions
