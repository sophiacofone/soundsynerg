import React, {useState} from "react";
import {useSelector} from "react-redux";

function AnalysisModuleTopMood() {
    const {topStats} = useSelector((state) => state.topStats);
    const [selectedTimeFrame, setSelectedTimeFrame] = useState("day");

    const topMood = {
        day: topStats.dailyTopMood,
        week: topStats.weeklyTopMood,
        month: topStats.monthlyTopMood,
        year: topStats.yearlyTopMood,
    }[selectedTimeFrame];

    const timeFrameText = {
        day: "today",
        week: "this week",
        month: "this month",
        year: "this year",
    };

    const topMoodText = `Your top mood ${timeFrameText[selectedTimeFrame]} is ${topMood} `;

    return (
        <div className="">
            <div className="card border-secondary m-3" id="top-mood">
                <div className="card-header">Top Statistics</div>
                <div className="card-body">
                    <h4 className="card-title">
                        {topMoodText}
                    </h4>
                </div>
                <div className="card-footer text-muted">
                    <h6 className="card-subtitle text-muted mb-1">Select timeframe</h6>
                    <div className="form-group">
                        <select className="form-control" id="time-dropdown" value={selectedTimeFrame} onChange={(e) => setSelectedTimeFrame(e.target.value)}>
                            <option value="day">Today</option>
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                            <option value="year">This Year</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnalysisModuleTopMood;
