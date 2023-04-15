import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        _id: 3,
        firstName: "ddd",
        lastName: "Wonderland",
        userName: "ddd",
        profilePicture: "./images/example-profile-pic.jpg",
    },
    {
        _id: 4,
        firstName: "e",
        lastName: "Cat",
        userName: "e",
        profilePicture: "./images/example-profile-pic.jpg",
    },
    {
        _id: 5,
        firstName: "2",
        lastName: "Scientist",
        userName: "2",
        profilePicture: "./images/example-profile-pic.jpg",
    },
];

const followingSlice = createSlice({
    name: "following",
    initialState,
    reducers: {
        addFollowering: (state, action) => {
            state.push(action.payload);
        },
        removeFollowering: (state, action) => {
            state = state.filter((following) => following._id !== action.payload);
        },
    },
});

export default followingSlice.reducer;
export const { addFollowering, removeFollowering } = followingSlice.actions;
