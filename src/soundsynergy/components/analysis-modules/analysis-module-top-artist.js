import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {findTopStatsThunk} from "../../../services/top-stats-thunk";

function AnalysisModuleTopArtist() {
    const dispatch = useDispatch();
    const {topStats, loading} = useSelector((state) => state.topStats);
    const [selectedTimeFrame, setSelectedTimeFrame] = useState("day");
    console.log("Top Stats:", topStats);
    console.log("Loading:", loading);


    useEffect(() => {
        dispatch(findTopStatsThunk());
    }, [dispatch]);

    useEffect(() => {
        // Only dispatch the thunk when selectedTimeFrame changes
        dispatch(findTopStatsThunk(selectedTimeFrame));
    }, [selectedTimeFrame, dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const topArtist = {
        day: topStats[0]?.dailyTopArtist,
        week: topStats[0]?.weeklyTopArtist,
        month: topStats[0]?.monthlyTopArtist,
        year: topStats[0]?.yearlyTopArtist,
    }[selectedTimeFrame];

    const timeFrameText = {
        day: "today",
        week: "this week",
        month: "this month",
        year: "this year",
    }[selectedTimeFrame];

    const topArtistText = `Your top artist ${timeFrameText} is ${topArtist}`;

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
