import {useSelector} from "react-redux";
import React from "react";

function AnalysisScreen() {
    const {user} = useSelector((state) => state.user);
    return (
        <div>
            <h1>Analysis</h1>
            <h2> Welcome {user.firstName} {user.lastName}</h2>
        </div>
    );
}

export default AnalysisScreen;