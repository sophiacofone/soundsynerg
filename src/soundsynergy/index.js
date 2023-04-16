import React from "react";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import { Route, Routes, Link } from 'react-router-dom';
import HomeScreenLoggedIn from "./screens/home/home-screen-logged-in";
import LoginScreen from "./screens/login/login-screen";
import ProfileScreen from "./screens/profile/profile-screen";
import SearchScreen from "./screens/search/search-screen";
import DetailsScreen from "./screens/details/details-screen";
import AnalysisScreen from "./screens/analysis/analysis-screen";
import RegisterScreen from "./screens/login/register-screen";
import EditProfileScreen from "./screens/edit-profile/edit-profile-screen";
import SpotifyScreen from "../spotify";

import userReducer from "./redux/user-reducer";
import NavigationSidebar from "./components/nav-bar";
import timeStatsReducer from "./redux/time-stats-reducer";
import topStatsReducer from "./redux/top-stats-reducer";
import businessStatsReducer from "./redux/business-stats-reducer";
import friendsReducer from "./redux/friends-reducer";
import followerReducer from "./redux/follower-reducer";
import followingReducer from "./redux/following-reducer";
import sharedReducer from "./redux/shared-summary-reducer";

const store = configureStore({reducer: {
        user: userReducer,
        timeStats: timeStatsReducer,
        topStats: topStatsReducer,
        businessStats: businessStatsReducer,
        friends: friendsReducer,
        followers: followerReducer,
        following: followingReducer,
        shared: sharedReducer,
    }});

function SoundSynergy() {
    return (
        <Provider store={store}>
                <Link to="/">Home</Link> |
                <Link to="/login">Login</Link> |
                <Link to="/register">Register</Link> |
                <Link to="/profile">Profile</Link> |
                <Link to="/edit-profile">Edit Profile</Link> |
                <Link to="/search">Search</Link> |
                <Link to="/details">Details</Link> |
                <Link to="/analysis">Analysis</Link> |
                <Link to="/spotify">Spotify</Link> |
                <div>
                    <NavigationSidebar/>
                </div>
                <Routes>
                    <Route path="/" element={<HomeScreenLoggedIn/>} />
                    <Route path="/login" element={<LoginScreen/>} />
                    <Route path="/profile" element={<ProfileScreen/>} />
                    <Route path="/edit-profile" element={<EditProfileScreen/>} />
                    <Route path="/search" element={<SearchScreen/>} />
                    <Route path="/details" element={<DetailsScreen/>} />
                    <Route path="/analysis" element={<AnalysisScreen/>} />
                    <Route path="/register" element={<RegisterScreen/>} />
                    <Route path="/spotify" element={<SpotifyScreen/>} />
                </Routes>
        </Provider>
    );
}

export default SoundSynergy