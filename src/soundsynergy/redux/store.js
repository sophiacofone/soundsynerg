import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import timeStatsReducer from "./time-stats-reducer";
import topStatsReducer from "./top-stats-reducer";


const store = configureStore({
    reducer: {
        user: userReducer,
        timeStats: timeStatsReducer,
        topStats: topStatsReducer,
    },
});

export default store;