import axios from 'axios';

const SPOTIFY_API = 'https://api.spotify.com/v1';
/*console.log(sessionStorage.getItem('accessToken'))*/
const instance = axios.create({
    baseURL: SPOTIFY_API,
});

export const spotifySearch = async (query, type = 'track,artist,album') => {
    try {
        const response = await instance.get(`/search?q=${query}&type=${type}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error in spotifySearch:', error);
        throw error;
    }
};
