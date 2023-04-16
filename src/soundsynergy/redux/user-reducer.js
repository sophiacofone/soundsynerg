import { createSlice } from "@reduxjs/toolkit";
import {findUsersThunk} from "../../services/users-thunk";
import {loginThunk, logoutThunk, registerThunk, profileThunk, updateUserThunk} from "../../services/auth-thunk";

const initialState = {
    users: [],
    loading: false,
    error: null,
    currentUser: null,
};
const userSlice = createSlice({
        name: "user",
        initialState: initialState,
        extraReducers: {
        [findUsersThunk.pending]:
            (state) => {
                state.loading = true
                state.user = []
            },
        [findUsersThunk.fulfilled]:
            (state, action) => {
                state.loading = false
                state.user = action.payload
            },
        [findUsersThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
            [loginThunk.fulfilled]: (state, { payload }) => {
                state.currentUser = payload;
            },
            [logoutThunk.fulfilled]: (state) => {
                state.currentUser = null;
            },
            [registerThunk.fulfilled]: (state, { payload }) => {
                state.currentUser = payload;
            },
            [profileThunk.fulfilled]: (state, { payload }) => {
                state.currentUser = payload;
            },
            [updateUserThunk.fulfilled]: (state, { payload }) => {
                state.currentUser = payload;
            }
    },
    reducers: {},
    });
export default userSlice.reducer;
export const {updateUser} = userSlice.actions;