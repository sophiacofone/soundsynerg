import React from "react";
import { useSelector } from "react-redux";
import FollowersListItem from "./followers-list-item";

const FollowersList = () => {
    const followerArray = useSelector(state => state.followers);

    return (
        <ul className="list-group">
            {followerArray.map(follower => (
                <FollowersListItem key={follower._id} follower={follower} />
            ))}
        </ul>
    );
};

export default FollowersList;