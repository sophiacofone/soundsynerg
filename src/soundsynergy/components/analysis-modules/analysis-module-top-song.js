import React, {useState} from "react";
import {useSelector} from "react-redux";

function AnalysisModuleTopSong() {
    const {topStats} = useSelector((state) => state.topStats);
    const [selectedTimeFrame, setSelectedTimeFrame] = useState("day");

    const topSong = {
        day: topStats.dailyTopSong,
        week: topStats.weeklyTopSong,
        month: topStats.monthlyTopSong,
        year: topStats.yearlyTopSong,
    }[selectedTimeFrame];

    const timeFrameText = {
        day: "today",
        week: "this week",
        month: "this month",
        year: "this year",
    };

    const topSongText = `Your top song ${timeFrameText[selectedTimeFrame]} is ${topSong} `;

    return (
        <div className="">
            <div className="card border-secondary m-3" id="top-song">
                <div className="card-header">Top Statistics</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-10">
                            <h4 className="card-title">
                                {topSongText}
                            </h4>
                        </div>
                    </div>
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

export default AnalysisModuleTopSong;
