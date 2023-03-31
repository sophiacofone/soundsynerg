import React from "react";
import {useDispatch} from "react-redux";


const FriendItem = (
    {
        friend = {
        }
    }
) => {
    const dispatch = useDispatch();

    return(
        <li className="list-group-item rounded-0">
            <div className="row">
                <div className="col-2 p-0">
                    <img className="rounded-circle w-100 float-right" src={`./images/${friend.image}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <span className="fw-bold">{friend.userName}</span>
                        <span className="m-lg-1"><i className="bi bi-check-circle-fill"></i></span>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default FriendItem;