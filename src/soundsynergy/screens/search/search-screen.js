import React from "react";
import {useSelector} from "react-redux";
import SpotifySearch from "../../../spotify/soptify-search";

function SearchScreen() {
    const {user} = useSelector((state) => state.user);
    return (
        <div>
            <h1>Search</h1>
            <h2> Welcome {user.firstName} {user.lastName}</h2>
            <SpotifySearch/>
        </div>
    );
}

export default SearchScreen;