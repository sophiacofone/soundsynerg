import React from "react";
import {Provider} from "react-redux";
import { Route, Routes, Link } from 'react-router-dom';
import HomeScreenLoggedIn from "./screens/home/home-screen-logged-in";
import LoginScreen from "./screens/login/login-screen";
import ProfileScreen from "./screens/profile/profile-screen";
import SearchScreen from "./screens/search/search-screen";
import DetailsScreen from "./screens/details/details-screen";
import AnalysisScreen from "./screens/analysis/analysis-screen";
import RegisterScreen from "./screens/login/register-screen";
import SpotifyScreen from "../spotify";
import NavigationSidebar from "./components/nav-bar";
import store from "./redux/store";

function SoundSynergy() {
    return (
        <Provider store={store}>
                <Link to="/">Home</Link> |
                <Link to="/login">Login</Link> |
                <Link to="/register">Register</Link> |
                <Link to="/profile">Profile</Link> |
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