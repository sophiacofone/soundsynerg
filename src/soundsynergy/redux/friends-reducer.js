import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    friend: {
        id_: "1",
        firstName: "Soph",
        lastName: "Wonderland",
        userName: "sophwonderland",
        profilePicture: "./images/example-profile-pic.jpg",
    }
};

const friendSlice = createSlice({
    name: "friend",
    initialState,
    reducers: {},
});

export default friendSlice.reducer;