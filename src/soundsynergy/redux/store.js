import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import timeStatsReducer from "./time-stats-reducer";
import topStatsReducer from "./top-stats-reducer";
import businessStatsReducer from "./business-stats-reducer";
import friendsReducer from "./friends-reducer";


const store = configureStore({
    reducer: {
        user: userReducer,
        timeStats: timeStatsReducer,
        topStats: topStatsReducer,
        businessStats: businessStatsReducer,
        friends: friendsReducer,
    },
});

export default store;