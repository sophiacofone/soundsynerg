import React from "react";
import { useState } from 'react';


const AnalysisModuleTime = (
    { timeStats = {
        dailyHrs: 2,
        weeklyHrs: 21,
        monthlyHrs: 70,
        yearlyHrs: 252,
        dailyFriendAvgHrs: 1,
        weeklyFriendAvgHrs: 12,
        monthlyFriendAvgHrs: 30,
        yearlyFriendAvgHrs: 332,
        dailyAllAvgHrs: 6,
        weeklyAllAvgHrs: 50,
        monthlyAllAvgHrs: 100,
        yearlyAllAvgHrs: 222,
    }
    }) => {
    const [selectedOption, setSelectedOption] = useState('this week');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const userHours = selectedOption === 'today' ? timeStats.dailyHrs : selectedOption === 'this week' ? timeStats.weeklyHrs : selectedOption === 'this month' ? timeStats.monthlyHrs : timeStats.yearlyHrs;
    const friendHours = selectedOption === 'today' ? timeStats.dailyFriendAvgHrs : selectedOption === 'this week' ? timeStats.weeklyFriendAvgHrs : selectedOption === 'this month' ? timeStats.monthlyFriendAvgHrs : timeStats.yearlyFriendAvgHrs;
    const allHours = selectedOption === 'today' ? timeStats.dailyAllAvgHrs : selectedOption === 'this week' ? timeStats.weeklyAllAvgHrs : selectedOption === 'this month' ? timeStats.monthlyAllAvgHrs : timeStats.yearlyAllAvgHrs;

    const percentageDiffFriend = ((userHours - friendHours) / friendHours) * 100;
    const percentageDiffAll = ((userHours - allHours) / allHours) * 100;

    return (
        <div className="">
            <div className="card border-secondary m-3">
                <div className="card-header">Listening Stats</div>
                <div className="card-body">
                    <h4 className="card-title">
                        You listened to {userHours} hours of music {selectedOption}
                    </h4>
                    <p className="card-text">That is {Math.abs(percentageDiffFriend).toFixed(0)}% {userHours > friendHours ? 'more' : 'less'} than your friends</p>
                    <p className="card-text">That is {Math.abs(percentageDiffAll).toFixed(0)}% {userHours > allHours ? 'more' : 'less'} than SoundSynergy users</p>
                </div>
                <div className="card-footer text-muted">
                    <h6 className="card-subtitle text-muted mb-1">Select timeframe</h6>
                    <div className="form-group">
                        <select className="form-control" id="time-dropdown" value={selectedOption} onChange={handleOptionChange}>
                            <option value="today">Today</option>
                            <option value="this week">This Week</option>
                            <option value="this month">This Month</option>
                            <option value="this year">This Year</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalysisModuleTime;