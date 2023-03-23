import React from "react";
import {useSelector} from "react-redux";

function DetailsScreen() {
    const {user} = useSelector((state) => state.user);
    return (
        <div>
            <h1>Details</h1>
            <h2> Welcome {user.firstName} {user.lastName}</h2>
        </div>
    );
}

export default DetailsScreen;