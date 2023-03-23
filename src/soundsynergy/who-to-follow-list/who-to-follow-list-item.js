import React from "react";
import "./index.css";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item rounded-0">
            <div className="row">
                <div className="col-3">
                    <img className="rounded-circle img-custom-sm img-fluid" src={`./images/${who.avatarIcon}`}/>
                </div>
                <div className="col-6 p-0 custom-text-size">
                    <div>
                        <span className="fw-bold">{who.userName}</span>
                        <span className="m-lg-1"><i className="bi bi-check-circle-fill"></i></span>
                    </div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-3 p-0">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;