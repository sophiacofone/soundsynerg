import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        _id: 1,
        firstName: "Soph",
        lastName: "Wonderland",
        userName: "sophwonderland",
        profilePicture: "./images/example-profile-pic.jpg",
    },
    {
        _id: 2,
        firstName: "Bobi",
        lastName: "Cat",
        userName: "bobicat",
        profilePicture: "./images/example-profile-pic.jpg",
    },
    {
        _id: 3,
        firstName: "Svilen",
        lastName: "Scientist",
        userName: "svilenscientist",
        profilePicture: "./images/example-profile-pic.jpg",
    },
];

const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {
        addFriend: (state, action) => {
            state.push(action.payload);
        },
        removeFriend: (state, action) => {
            state = state.filter(friend => friend._id !== action.payload);
        },
    },
});

export default friendsSlice.reducer;
export const { addFriend, removeFriend } = friendsSlice.actions;