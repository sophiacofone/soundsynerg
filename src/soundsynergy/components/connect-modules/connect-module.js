import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function ConnectModule() {
    const {friends} = useSelector((state) => state.friends);

    return (
        <div className="">
            <div className="alert alert-dismissible alert-light">
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                <strong>{friends.firstName} {friends.lastName}</strong> would love this song!
                <h1 className='m-0'><Link to="/"  className='btn btn-primary btn-sm'>
                    <span className=""> Share it <i className="bi bi-music-note-beamed"></i></span>
                </Link></h1>
            </div>
        </div>
    );
}

export default ConnectModule;