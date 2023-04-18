import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, logoutThunk, updateProfileThunk } from "../../../services/users-thunk";
import { useNavigate } from "react-router";
import EditProfileModal from "./edit-profile-modal";

function PersonalInfoModule() {
    const { currentUser, profileFetched } = useSelector((state) => state.users);
    console.log("Current user:", currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false); // state to control modal visibility

    useEffect(() => {
        dispatch(fetchProfile());
        console.log("PersonalInfoModule useEffect");
    }, [dispatch]);

    const handleUpdateProfile = (updatedProfile) => {
        console.log("function handleUpdateProfile Updating profile data:", updatedProfile);
        dispatch(updateProfileThunk(updatedProfile))
            .then(() => {
                setShowModal(false); // close the modal after the update is done
                console.log("Profile updated successfully!");
            });
    }

    return (
        <div>
            <div className="">
                <div>
                    {currentUser && (
                        <div className="card border-secondary">
                            <div className="card-header">Personal Information</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <img src={currentUser.profilePic} alt="profile" className="position-relative rounded-circle img-thumbnail"/>
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
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        dispatch(logoutThunk());
                        navigate("/login");
                    }}
                >
                    Logout
                </button>
            </div>
            <button onClick={() => setShowModal(true)}>Edit Profile</button>
            {showModal && <EditProfileModal currentUser={currentUser} onClose={() => setShowModal(false)} onUpdateProfile={handleUpdateProfile} />}
        </div>
    );
}

export default PersonalInfoModule;

