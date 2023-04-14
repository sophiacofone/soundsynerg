import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    businessStats: {
        business1Name: 'Restaurant',
        business1Profile: '@restaurant',
        business1Image: 'restaurant.jpeg',
        business2Name: 'Cafe',
        business2Profile: '@cafe',
        business2Image: 'cafe.jpeg',
        business3Name: 'Bar',
        business3Profile: '@bar',
        business3Image: 'bar.jpeg',
        business4Name: 'Hotel',
        business4Profile: '@hotel',
        business4Image: 'hotel.jpeg',
        business5Name: 'Store',
        business5Profile: '@store',
        business5Image: 'store.jpeg',
        business6Name: 'Gym',
        business6Profile: '@gym',
        business6Image: 'gym.jpeg',
        business7Name: 'Venue',
        business7Profile: '@venue',
        business7Image: 'eenue.jpeg',
    },
};
const businessStatsSlice = createSlice({
    name: "businessStats",
    initialState,
    reducers: {},
});

export default businessStatsSlice.reducer;

