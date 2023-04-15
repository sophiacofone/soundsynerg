import { createSlice } from "@reduxjs/toolkit";
import {findTopStatsThunk} from "../../services/top-stats-thunk";

const initialState = {
    topStats: [],
    loading: false
}

const topStatsSlice = createSlice({
    name: "topStats",
    initialState,
    extraReducers: {
        [findTopStatsThunk.pending]:
            (state) => {
                state.loading = true
                state.topStats = []
            },
        [findTopStatsThunk.fulfilled]:
            (state, action) => {
                state.loading = false
                state.topStats = action.payload
            },
        [findTopStatsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },
    reducers: {},
});

export default topStatsSlice.reducer;
