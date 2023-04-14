import React, {useState} from "react";
import {useSelector} from "react-redux";

function AnalysisModuleTopArtist() {
    const {topStats} = useSelector((state) => state.topStats);
    const [selectedTimeFrame, setSelectedTimeFrame] = useState("day");

    const topArtist = {
        day: topStats.dailyTopArtist,
        week: topStats.weeklyTopArtist,
        month: topStats.monthlyTopArtist,
        year: topStats.yearlyTopArtist,
    }[selectedTimeFrame];

    const timeFrameText = {
        day: "today",
        week: "this week",
        month: "this month",
        year: "this year",
    };

    const topArtistText = `Your top artist ${timeFrameText[selectedTimeFrame]} is ${topArtist} `;

    return (
        <div className="">
            <div className="card border-secondary m-3" id="top-artist">
                <div className="card-header">Top Statistics</div>
                <div className="card-body">
                    <h4 className="card-title">
                        {topArtistText}
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

export default AnalysisModuleTopArtist;
