import React from "react";
import { useState } from 'react';


const AnalysisModuleTop = (
    { topStats = {
        dailyTopSong: 'Hotel California',
        imgDailyTopSong: 'example-profile-pic.jpg',
        weeklyTopSong: 'Flowers',
        imgWeeklyTopSong: 'song_place.jpeg',
        monthlyTopSong: 'The Winds of Winter',
        imgMonthlyTopSong: 'song_place.jpeg',
        yearlyTopSong: 'Kill Bill',
        imgYearlyTopSong: 'song_place.jpeg',
        dailyTopArtist: 'Ramin Djawadi',
        imgDailyTopArtist: 'song_place.jpeg',
        weeklyTopArtist: 'Taylor Swift',
        imgWeeklyTopArtist: 'song_place.jpeg',
        monthlyTopArtist: 'Drake',
        imgMonthlyTopArtist: 'song_place.jpeg',
        yearlyTopArtist: 'SZA',
        imgYearlyTopArtist: 'song_place.jpeg',
        dailyTopGenre: 'Rap',
        weeklyTopGenre: 'Pop',
        monthlyTopGenre: 'Latin',
        yearlyTopGenre: 'Pop',
        dailyTopMood: 'Happy',
        weeklyTopMood: 'Sad',
        monthlyTopMood: 'Upbeat',
        yearlyTopMood: 'Happy',
    }
    }) => {
    const [selectedOption, setSelectedOption] = useState('this week');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const userTopSong = selectedOption === 'today' ? topStats.dailyTopSong : selectedOption === 'this week' ? topStats.weeklyTopSong : selectedOption === 'this month' ? topStats.monthlyTopSong : topStats.yearlyTopSong;
    const userTopSongImg = selectedOption === 'today' ? topStats.imgDailyTopSong : selectedOption === 'this week' ? topStats.imgWeeklyTopSong : selectedOption === 'this month' ? topStats.imgMonthlyTopSong : topStats.imgYearlyTopSong;

    const userTopArtist = selectedOption === 'today' ? topStats.dailyTopArtist : selectedOption === 'this week' ? topStats.weeklyTopArtist : selectedOption === 'this month' ? topStats.monthlyTopArtist : topStats.yearlyTopArtist;
    const userTopArtistImg = selectedOption === 'today' ? topStats.imgDailyTopArtist : selectedOption === 'this week' ? topStats.imgWeeklyTopArtist : selectedOption === 'this month' ? topStats.imgMonthlyTopArtist : topStats.imgYearlyTopArtist;

    const userTopGenre = selectedOption === 'today' ? topStats.dailyTopGenre : selectedOption === 'this week' ? topStats.weeklyTopGenre : selectedOption === 'this month' ? topStats.monthlyTopGenre : topStats.yearlyTopGenre;
    const userTopMood = selectedOption === 'today' ? topStats.dailyTopMood : selectedOption === 'this week' ? topStats.weeklyTopMood : selectedOption === 'this month' ? topStats.monthlyTopMood : topStats.yearlyTopMood;

    return (
        <div className="">
            <div className="card border-secondary m-3" id="top-song">
                <div className="card-header">Top Statistics</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                            <img src={topStats.imgDailyTopSong} alt="profile" className="position-relative rounded-circle img-thumbnail"/>
                        </div>
                        <div className="col-10">
                            <h4 className="card-title">
                                Your top song {selectedOption} is {userTopSong}
                            </h4>
                        </div>
                    </div>
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
            <div className="card border-secondary m-3" id="top-artist">
                <div className="card-header">Top Statistics</div>
                <div className="card-body">
                    <h4 className="card-title">
                        Your top artist {selectedOption} is {userTopArtist}
                    </h4>
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
            <div className="card border-secondary m-3" id="top-genre">
                <div className="card-header">Top Statistics</div>
                <div className="card-body">
                    <h4 className="card-title">
                        Your top genre {selectedOption} is {userTopGenre}
                    </h4>
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
            <div className="card border-secondary m-3" id="top-mood">
                <div className="card-header">Top Statistics</div>
                <div className="card-body">
                    <h4 className="card-title">
                        Your top mood {selectedOption} is {userTopMood}
                    </h4>
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

export default AnalysisModuleTop;