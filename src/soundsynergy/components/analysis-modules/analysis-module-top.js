import React, {useState} from "react";
import {useSelector} from "react-redux";

function AnalysisModuleTop() {
    const {topStats} = useSelector((state) => state.topStats);
    const [selectedTimeFrame, setSelectedTimeFrame] = useState("day");

    const topSong = {
        day: topStats.dailyTopSong,
        week: topStats.weeklyTopSong,
        month: topStats.monthlyTopSong,
        year: topStats.yearlyTopSong,
    }[selectedTimeFrame];

    const topArtist = {
        day: topStats.dailyTopArtist,
        week: topStats.weeklyTopArtist,
        month: topStats.monthlyTopArtist,
        year: topStats.yearlyTopArtist,
    }[selectedTimeFrame];

    const topGenre = {
        day: topStats.dailyTopGenre,
        week: topStats.weeklyTopGenre,
        month: topStats.monthlyTopGenre,
        year: topStats.yearlyTopGenre,
    }[selectedTimeFrame];

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

    const topSongText = `Your top song ${timeFrameText[selectedTimeFrame]} is ${topSong} `;
    const topArtistText = `Your top artist ${timeFrameText[selectedTimeFrame]} is ${topArtist} `;
    const topGenreText = `Your top genre ${timeFrameText[selectedTimeFrame]} is ${topGenre} `;
    const topMoodText = `Your top mood ${timeFrameText[selectedTimeFrame]} is ${topMood} `;

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

export default AnalysisModuleTop;
