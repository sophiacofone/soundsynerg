import React, {useState} from "react";
import {useSelector} from "react-redux";
import FriendsList from "../friends";

function FriendsProfileModule() {

    return (
        <div className="">
            <div className="card border-secondary">
                <div className="card-header">Friends List</div>
                <div className="card-body">
                    <div className="row">
                        <FriendsList/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FriendsProfileModule;