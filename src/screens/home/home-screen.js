import React from "react";
import {useSelector} from "react-redux";

function HomeScreen() {
    const {user} = useSelector((state) => state.user);
    return (
        <div>
            <h1>Home</h1>
            <h2> Welcome {user.firstName} {user.lastName}</h2>
        </div>
    );
}

export default HomeScreen;