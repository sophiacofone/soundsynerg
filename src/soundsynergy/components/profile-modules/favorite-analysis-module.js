import React, {useState} from "react";
import {useSelector} from "react-redux";
import AnalysisModuleTopGenre from "../analysis-modules/analysis-module-top-genre";
import AnalysisModuleTime from "../analysis-modules/analysis-module-time";

function FavAnalysisModule() {

    return (
        <div className="">
            <div className="card border-secondary">
                <div className="card-header">Favorite Analysis</div>
                <div className="card-body">
                    <AnalysisModuleTopGenre/>
                    <AnalysisModuleTime/>
                </div>
            </div>
        </div>
    );
}

export default FavAnalysisModule;