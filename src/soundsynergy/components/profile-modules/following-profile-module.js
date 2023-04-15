import React, {useState} from "react";
import {useSelector} from "react-redux";
import FollowingList from "../following";

function FollowingProfileModule() {

    return (
        <div className="">
            <div className="card border-secondary ">
                <div className="card-header">Following List</div>
                <div className="card-body">
                    <div className="row">
                    <FollowingList/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FollowingProfileModule;