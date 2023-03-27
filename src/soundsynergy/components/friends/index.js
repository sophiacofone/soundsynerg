import React from "react";
import {useSelector} from "react-redux";
import FriendsListItem from "./friends-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);
    return(
        <ul className="list-group bold">
            <li className="list-group-item rounded-0">
                <h3>Friends List</h3>
            </li>
            {
                whoArray.map(who =>
                    <FriendsListItem
                        key={who._id}
                        who={who}/>
                )
            }
        </ul>
    );
};

export default WhoToFollowList;