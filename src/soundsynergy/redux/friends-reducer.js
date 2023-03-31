import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    friends: {
        _id: 123,
        firstName: "Soph",
        lastName: "Wonderland",
        userName: "sophwonderland",
        profilePicture: "./images/example-profile-pic.jpg",
    }
};

const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {},
});

export default friendsSlice.reducer;