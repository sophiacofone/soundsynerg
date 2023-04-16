import React, { useState } from 'react';
import {spotifySearch} from "./spotify-service";

function SpotifySearch() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const accessToken = sessionStorage.getItem('accessToken');
    console.log(accessToken);
    const handleSearch = async () => {
        try {
            const data = await spotifySearch(search, 'artist');
            setResults(data.artists.items);
        } catch (error) {
            console.error('Error searching for artists:', error);
        }
    };

    return (
        <div>
            <h1>Spotify Search</h1>
            <input
                className="form-control w-75"
                type="text"
                placeholder="Search for an Artist"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button className="float-end btn btn-primary" onClick={handleSearch}>
                Search
            </button>

            <ul>
                {results.map(result => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SpotifySearch;
