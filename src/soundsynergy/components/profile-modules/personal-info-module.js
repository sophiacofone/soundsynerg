import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function PersonalInfoModule() {
    const {user} = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);

    return (
        <div className="">
            <div className="card border-secondary">
                <div className="card-header">Personal Information</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                            <img src={profile.profilePicture} alt="profile" className="position-relative rounded-circle img-thumbnail"/>
                        </div>
                        <div className="col-9">
                            <h2 className="mb-0">{profile.firstName} {profile.lastName}</h2>
                            <div className="mb-0">{profile.userName}</div>
                            <div className="mt-2">{profile.bio}</div>
                            <div className="row">
                                <div className="col-4 mt-2 text-muted"><i className="bi bi-geo-alt-fill"></i> {profile.city}, {profile.state}</div>
                                <div className="col-4 mt-2 text-muted"><i className="bi bi-balloon"></i> Born {profile.dateOfBirth}</div>
                                <div className="col-4 mt-2 text-muted"><i className="bi bi-calendar3"></i> Joined {profile.dateJoined}</div>
                            </div>
                            <div className="row">
                                <div className="col-4 mt-2"><i className="bi bi-people-fill"></i> {profile.followingCount}
                                    <span className="text-muted"> Following</span>
                                </div>
                                <div className="col-4 mt-2"><i className="bi bi-people-fill"></i> {profile.followersCount}
                                    <span className="text-muted"> Followers</span>
                                </div>
                                <div className="col-4 mt-2"><i className="bi bi-cassette"></i> {profile.sharedCount}
                                    <span className="text-muted"> Songs Shared</span>
                                </div>
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
        </div>
    );
}

export default PersonalInfoModule;