import React, { useState } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {profileThunk} from "../../../services/auth-thunk";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function PersonalInfoModule() {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(profileThunk());
    }, []);

/*
    const [profile] = useState(currentUser);
*/
    console.log(currentUser)
    return (
        <div className="">
            {currentUser && (
            <div className="card border-secondary">
                <div className="card-header">Personal Information</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-2">
{                       <img src={currentUser.profilePic} alt="profile" className="position-relative rounded-circle img-thumbnail"/>}
                        </div>
                        <div className="col-9">
                            <h2 className="mb-0">{currentUser.firstName} {currentUser.lastName}</h2>
                            <div className="mb-0">{currentUser.username}</div>
                            <div className="mt-2">{currentUser.bio}</div>
                            <div className="row">
                                <div className="col-4 mt-2 text-muted"><i className="bi bi-geo-alt-fill"></i> {currentUser.city}, {currentUser.state}</div>
                                <div className="col-4 mt-2 text-muted"><i className="bi bi-balloon"></i> Born {currentUser.dob}</div>
                                <div className="col-4 mt-2 text-muted"><i className="bi bi-calendar3"></i> Joined {currentUser.createdAt}</div>
                            </div>
                            <div className="row">
                                {/*<div className="col-4 mt-2"><i className="bi bi-people-fill"></i> {profile.followingCount}
                                    <span className="text-muted"> Following</span>
                                </div>
                                <div className="col-4 mt-2"><i className="bi bi-people-fill"></i> {profile.followersCount}
                                    <span className="text-muted"> Followers</span>
                                </div>
                                <div className="col-4 mt-2"><i className="bi bi-cassette"></i> {profile.sharedCount}
                                    <span className="text-muted"> Songs Shared</span>
                                </div>*/}
                            </div>
                        </div>
                        <div className="col-1">
                            <Link to="/edit-profile">
                                <button className="btn btn-primary btn-small rounded-pill float-end mt-2">Edit Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default PersonalInfoModule;