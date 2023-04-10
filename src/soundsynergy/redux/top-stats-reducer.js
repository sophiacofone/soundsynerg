import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topStats: {
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
    },
};
const topStatsSlice = createSlice({
    name: "topStats",
    initialState,
    reducers: {},
});

export default topStatsSlice.reducer;
