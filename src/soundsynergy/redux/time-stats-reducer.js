import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timeStats: {
        dailyHrs: 2,
        weeklyHrs: 21,
        monthlyHrs: 70,
        yearlyHrs: 252,
        dailyFriendAvgHrs: 1,
        weeklyFriendAvgHrs: 12,
        monthlyFriendAvgHrs: 30,
        yearlyFriendAvgHrs: 332,
        dailyAllAvgHrs: 6,
        weeklyAllAvgHrs: 50,
        monthlyAllAvgHrs: 100,
        yearlyAllAvgHrs: 222,
    },
};
const timeStatsSlice = createSlice({
    name: "timeStats",
    initialState,
    reducers: {},
});

export default timeStatsSlice.reducer;
export const { setTimeStats } = timeStatsSlice.actions;

