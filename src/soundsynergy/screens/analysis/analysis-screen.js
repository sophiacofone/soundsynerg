import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AnalysisModuleTime from "../../components/analysis-modules/analysis-module-time";
import AnalysisModuleTopSong from "../../components/analysis-modules/analysis-module-top-song";
import AnalysisModuleTopArtist from "../../components/analysis-modules/analysis-module-top-artist";
import AnalysisModuleTopGenre from "../../components/analysis-modules/analysis-module-top-genre";
import AnalysisModuleTopMood from "../../components/analysis-modules/analysis-module-top-mood";

function AnalysisScreen() {
    const {user} = useSelector((state) => state.user);

    return (
        <div>
            <h1>Analysis page</h1>
            <h2> Welcome {user.firstName} {user.lastName}</h2>
            <h1>Time-modules</h1>
            <div>
                <AnalysisModuleTime/>
            </div>
            <h1>Top-modules</h1>
            <div>
                <AnalysisModuleTopSong/>
                <AnalysisModuleTopArtist/>
                <AnalysisModuleTopGenre/>
                <AnalysisModuleTopMood/>
            </div>
        </div>
    );
}

export default AnalysisScreen;