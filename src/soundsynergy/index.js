import React from "react";
import {Routes, Route} from "react-router";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import DetailScreen from "./screens/detail/detail-screen";
import HomeScreen from "./screens/home/home-screen";
import LoginScreen from "./screens/login/login-screen";
import SearchScreen from "./screens/search/search-screen";
import AnalysisScreen from "./screens/analysis/analysis-screen";

const store = configureStore({reducer: {who: whoReducer}});

function SoundSynergy() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/" element={<HomeScreen />}/>
                        <Route path="home"    element={<HomeScreen/>}/>
                        <Route path="login" element={<LoginScreen/>}/>
                        <Route path="explore" element={<SearchScreen/>}/>
                        <Route path="explore" element={<DetailScreen/>}/>
                        <Route path="explore" element={<AnalysisScreen/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default SoundSynergy