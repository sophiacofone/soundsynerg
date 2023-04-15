import React from "react";
import { useSelector } from "react-redux";
import FollowingListItem from "./following-list-item";

const FollowingList = () => {
    const followingArray = useSelector(state => state.following);
    return (
        <ul className="list-group">
            {followingArray.map(following => (
                <FollowingListItem key={following._id} following={following} />
            ))}
        </ul>
    );
};

export default FollowingList;