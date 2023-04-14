import React, {useState} from "react";
import {useSelector} from "react-redux";

function AnalysisModuleTopGenre() {
    const {topStats} = useSelector((state) => state.topStats);
    const [selectedTimeFrame, setSelectedTimeFrame] = useState("day");

    const topGenre = {
        day: topStats.dailyTopGenre,
        week: topStats.weeklyTopGenre,
        month: topStats.monthlyTopGenre,
        year: topStats.yearlyTopGenre,
    }[selectedTimeFrame];

    const timeFrameText = {
        day: "today",
        week: "this week",
        month: "this month",
        year: "this year",
    };

    const topGenreText = `Your top genre ${timeFrameText[selectedTimeFrame]} is ${topGenre} `;

    return (
        <div className="">
            <div className="card border-secondary m-3" id="top-genre">
                <div className="card-header">Top Statistics</div>
                <div className="card-body">
                    <h4 className="card-title">
                        {topGenreText}
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

export default AnalysisModuleTopGenre;
