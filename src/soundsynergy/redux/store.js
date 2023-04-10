import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import timeStatsReducer from "./time-stats-reducer";


const store = configureStore({
    reducer: {
        user: userReducer,
        timeStats: timeStatsReducer,
    },
});

export default store;