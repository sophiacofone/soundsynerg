import React, {useState} from "react";
import {useSelector} from "react-redux";
import FollowersList from "../followers";

function FollowersProfileModule() {

    return (
        <div className="">
            <div className="card border-secondary m-3">
                <div className="card-header">Followers List</div>
                <div className="card-body">
                    <div className="row">
                        <FollowersList/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FollowersProfileModule;