import React from "react";
import {useSelector} from "react-redux";
import FriendsListItem from "./friends-list-item";

const FriendsList = () => {
    const friendArray = useSelector(state => state.friends)

    const initialState = {
        friends: {
            _id: 123,
            firstName: "Soph",
            lastName: "Wonderland",
            userName: "sophwonderland",
            profilePicture: "./images/example-profile-pic.jpg",
        }
    };
    console.log(initialState)
    return(
        <ul className="list-group">
            {
                initialState.map(friend =>
                    <FriendsListItem
                        key={friend._id}
                        tuit={friend}/>
                )

            }
        </ul>
    );
};
export default FriendsList;