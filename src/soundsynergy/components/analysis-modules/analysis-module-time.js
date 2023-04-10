import React, {useState} from "react";
import {useSelector} from "react-redux";

function AnalysisModuleTime() {
    const {timeStats} = useSelector((state) => state.timeStats);
    const [selectedTimeFrame, setSelectedTimeFrame] = useState("day");

    const userHours = {
        day: timeStats.dailyHrs,
        week: timeStats.weeklyHrs,
        month: timeStats.monthlyHrs,
        year: timeStats.yearlyHrs,
    }[selectedTimeFrame];

    const friendHours = {
        day: timeStats.dailyFriendAvgHrs,
        week: timeStats.weeklyFriendAvgHrs,
        month: timeStats.monthlyFriendAvgHrs,
        year: timeStats.yearlyFriendAvgHrs,
    }[selectedTimeFrame];

    const allHours = {
        day: timeStats.dailyAllAvgHrs,
        week: timeStats.weeklyAllAvgHrs,
        month: timeStats.monthlyAllAvgHrs,
        year: timeStats.yearlyAllAvgHrs,
    }[selectedTimeFrame];

    const timeFrameText = {
        day: "today",
        week: "this week",
        month: "this month",
        year: "this year",
    };

    const userText = `You listened to ${userHours} hours of music ${timeFrameText[selectedTimeFrame]}`;

    let friendComparisonText;
    if (userHours > friendHours) {
        const percentMore = ((userHours - friendHours) / friendHours) * 100;
        friendComparisonText = `That's ${percentMore.toFixed(
            0
        )}% more than your friends,`;
    } else if (userHours < friendHours) {
        const percentLess = ((friendHours - userHours) / friendHours) * 100;
        friendComparisonText = `That's ${percentLess.toFixed(
            0
        )}% less than your friends,`;
    } else {
        friendComparisonText = `That's the same as as your friends,`;
    }

    let allComparisonText;
    if (userHours > allHours) {
        const percentMore = ((userHours - allHours) / allHours) * 100;
        allComparisonText = `and ${percentMore.toFixed(
            0
        )}% more than SoundSynergy users.`;
    } else if (userHours < allHours) {
        const percentLess = ((allHours - userHours) / allHours) * 100;
        allComparisonText = `and ${percentLess.toFixed(
            0
        )}% less than SoundSynergy users.`;
    } else {
        allComparisonText = `and the same as SoundSynergy users.`;
    }

    return (
        <div className="">
            <div className="card border-secondary m-3">
                <div className="card-header">Listening Stats</div>
                <div className="card-body">
                    <h4 className="card-title">
                        {userText}
                    </h4>
                    <p className="card-text">{friendComparisonText} {allComparisonText}</p>
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

export default AnalysisModuleTime;
