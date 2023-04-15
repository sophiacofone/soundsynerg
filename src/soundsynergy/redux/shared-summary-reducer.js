import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        _id: 1,
        firstName: "Bobi",
        lastName: "Cat",
        userName: "bobicat",
        profilePicture: "./images/example-profile-pic.jpg",
        song: "Say So",
        artist: "Doja Cat",
        album: "Hot Pink",
    },
    {
        _id: 2,
        firstName: "Svilen",
        lastName: "Scientist",
        userName: "svilenscientist",
        profilePicture: "./images/example-profile-pic.jpg",
        song: "Watermelon Sugar",
        artist: "Harry Styles",
        album: "Fine Line",
    },
    {
        _id: 3,
        firstName: "Marisa",
        lastName: "C",
        userName: "mc",
        profilePicture: "./images/example-profile-pic.jpg",
        song: "Rockstar",
        artist: "DaBaby",
        album: "Blame It On Baby",
    },
];

const sharedSlice = createSlice({
    name: "shared",
    initialState,
    reducers: {
        addShared: (state, action) => {
            state.push(action.payload);
        },
        removeShared: (state, action) => {
            state = state.filter(shared => shared._id !== action.payload);
        },
    },
});

export default sharedSlice.reducer;
export const { addShared, removeShared} = sharedSlice.actions;