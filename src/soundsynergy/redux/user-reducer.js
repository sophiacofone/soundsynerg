import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        firstName: "Soph",
        lastName: "Wonderland",
        email: "swonder@gmail.com",
        phone: "123-456-7890",
        address: "123 Main St",
        city: "Boston",
        state: "MA",
        zip: "02134",
        country: "USA",
        profilePicture: "./images/example-profile-pic.jpg",
        bio: "I am a music lover and I love to share my music with others.",
        dateOfBirth: "01/01/2000",
        dateJoined: "01/01/2020",
        followersCount: 100,
        followingCount: 10,
        sharedCount: 50,
    }
};
const userSlice = createSlice({
        name: "user",
        initialState: initialState,
        reducers: {
            updateUser: (state, action) => {
                state.user = action.payload;
            }
        },
    });
export default userSlice.reducer;
export const {updateUser} = userSlice.actions;