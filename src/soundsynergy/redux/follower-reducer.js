import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        _id: 3,
        firstName: "Marisa",
        lastName: "Wonderland",
        userName: "mwonderland",
        profilePicture: "./images/example-profile-pic.jpg",
    },
    {
        _id: 4,
        firstName: "Nikola",
        lastName: "Cat",
        userName: "nikolacat",
        profilePicture: "./images/example-profile-pic.jpg",
    },
    {
        _id: 5,
        firstName: "Butter",
        lastName: "Scientist",
        userName: "sutterscientist",
        profilePicture: "./images/example-profile-pic.jpg",
    },
];

const followersSlice = createSlice({
    name: "followers",
    initialState,
    reducers: {
        addFollower: (state, action) => {
            state.push(action.payload);
        },
        removeFollower: (state, action) => {
            state = state.filter((follower) => follower._id !== action.payload);
        },
    },
});

export default followersSlice.reducer;
export const { addFollower, removeFollower } = followersSlice.actions;
