import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAnalysisStats: {
        firstName: "Soph",
        lastName: "Wonderland",
        userName: "sophwonderland",
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
const userAnalysisStatsSlice = createSlice({
    name: "userAnalysisStats",
    initialState: initialState,
    reducers: {
    },
});
export default userAnalysisStatsSlice.reducer;