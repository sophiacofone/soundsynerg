import React from "react";
import {useDispatch} from "react-redux";
const FriendsListItem = (
    {
        friend = {
        }
    }
) => {
    const dispatch = useDispatch();

    return(
        <li className="list-group-item rounded-0">
            <div className="row">
                <div className="col-3">
                    <img className="rounded-circle img-custom-sm img-fluid" src={`./images/${friend.avatarIcon}`}/>
                </div>
                <div className="col-6 p-0 custom-text-size">
                    <div>
                        <span className="fw-bold">{friend.userName}</span>
                        <span className="m-lg-1"><i className="bi bi-check-circle-fill"></i></span>
                    </div>
                    <div>@{friend.handle}</div>
                </div>
                <div className="col-3 p-0">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default FriendsListItem;