import React from "react";
import { useSelector } from "react-redux";
import FriendsListItem from "./friends-list-item";

const FriendsList = () => {
    const friendArray = useSelector(state => state.friends);

    return (
        <ul className="list-group">
            {friendArray.map(friend => (
                <FriendsListItem key={friend._id} friend={friend} />
            ))}
        </ul>
    );
};

export default FriendsList;