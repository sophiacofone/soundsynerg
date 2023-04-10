import {useSelector} from "react-redux";
import React from "react";
import AnalysisModuleTime from "../../components/analysis-modules/analysis-module-time";
import AnalysisModuleTop from "../../components/analysis-modules/analysis-module-top";

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
                <AnalysisModuleTop/>
            </div>
        </div>
    );
}

export default AnalysisScreen;