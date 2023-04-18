const { createSlice } = require("@reduxjs/toolkit");
const {
        findAllUsersThunk,
        findUserByIdThunk,
        createUserThunk,
        deleteUserThunk,
        /*updateUserThunk,*/
        loginThunk,
        updateProfileThunk,
        logoutThunk,
        fetchProfile,
        registerThunk,
} = require("../../services/users-thunk");

const initialState = {
    users: [],
    loading: false,
    error: null,
    currentUser: null,
    profileFetched: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [updateProfileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
/*        [updateUserThunk.fulfilled]: (state, action) => {
            console.log("Updated profile data reducer:", action.payload);
            state.currentUser = action.payload;
            state.profileFetched = true; // Set profileFetched to true
        },*/
        [createUserThunk.fulfilled]: (state, action) => {
            state.users.push(action.payload);
        },
        [deleteUserThunk.fulfilled]: (state, action) => {
            state.users = state.users.filter((user) => user._id !== action.payload);
        },
        [findAllUsersThunk.pending]: (state, action) => {
            state.loading = true;
            state.users = [];
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [findAllUsersThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [findUserByIdThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null;
            state.profileFetched = false; // Reset profileFetched to false
        },
        [fetchProfile.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            state.profileFetched = true;
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});

export default usersSlice.reducer;