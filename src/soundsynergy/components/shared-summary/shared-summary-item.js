import React from "react";

const SharedSummaryItem = ({shared = {}}) => {
    return (
        <li className="list-group-item rounded-0">
            <div className="row">
                <div className="col-2 p-0">
                    <img
                        className="rounded-circle w-100 float-right"
                        src={shared.profilePicture}
                        alt={`${shared.firstName} ${shared.lastName}`}
                    />
                </div>
                <div className="col-10">
                    <div>
                        <span className="fw-bold">{shared.userName}</span>
                        <span className="m-lg-1">{shared.song}</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default SharedSummaryItem;

