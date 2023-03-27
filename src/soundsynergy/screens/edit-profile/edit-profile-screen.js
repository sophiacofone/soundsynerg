import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {updateUser} from "../../redux/user-reducer";

function EditProfileScreen() {
    const {user} = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch();
    const handleSaveButton = () => {
        dispatch(updateUser(profile));
    };
    return (
        <div>
            <div className="card border-primary mb-3 mt-3">
                <div className="card-header">
                    <Link to="/profile">
                        <button className="btn btn-link"><i className="bi bi-x-lg"></i></button>
                    </Link>
                    Edit Profile
                    <button
                        className="btn btn-secondary rounded-pill float-end"
                        onClick={handleSaveButton}>Save
                    </button>
                </div>
                <div className="card-body">
                    <h4 className="card-title">Public Information</h4>
                    <div className="row">
                        <div className="col-2">
                            <img src={profile.profilePicture} alt="profile"
                                 className="position-relative rounded-circle img-thumbnail"/>
                        </div>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputFirstName" className="text-muted custom-text-size-loc">First
                                Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputFirstName"
                                placeholder="First name"
                                value={profile.firstName}
                                onChange={(event) => setProfile({...profile, firstName: event.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputLastName" className="text-muted custom-text-size-loc">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputLastName"
                                placeholder="Last name"
                                value={profile.lastName}
                                onChange={(event) => setProfile({...profile, lastName: event.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputBio" className="text-muted custom-text-size-loc">Bio</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputBio"
                                placeholder="Bio"
                                value={profile.bio}
                                onChange={(event) => setProfile({...profile, bio: event.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputLocation" className="text-muted custom-text-size-loc">Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputLocation"
                                placeholder="City"
                                value={profile.city}
                                onChange={(event) => setProfile({...profile, city: event.target.value})}
                            />
                            <input
                                type="text"
                                className="form-control"
                                id="inputLocation"
                                placeholder="State"
                                value={profile.state}
                                onChange={(event) => setProfile({...profile, state: event.target.value})}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="inputDateOfBirth" className="text-muted custom-text-size-loc"> Birth
                                date</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputDateOfBirth"
                                placeholder="Date of Birth"
                                value={profile.dateOfBirth}
                                onChange={(event) => setProfile({...profile, dateOfBirth: event.target.value})}
                            />
                            <h4 className="card-title mt-2">Private Information</h4>
                            <div className="form-group">
                                <label htmlFor="inputPrivateLocation" className="text-muted custom-text-size-loc">Additional location info</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPrivateLocation"
                                    placeholder="Address"
                                    value={profile.address}
                                    onChange={(event) => setProfile({...profile, address: event.target.value})}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPrivateLocation"
                                    placeholder="Zip code"
                                    value={profile.zip}
                                    onChange={(event) => setProfile({...profile, zip: event.target.value})}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPrivateLocation"
                                    placeholder="Country"
                                    value={profile.country}
                                    onChange={(event) => setProfile({...profile, country: event.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail" className="text-muted custom-text-size-loc">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="Email"
                                    value={profile.email}
                                    onChange={(event) => setProfile({...profile, email: event.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPhone" className="text-muted custom-text-size-loc">Phone number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPhone"
                                    placeholder="Email"
                                    value={profile.phone}
                                    onChange={(event) => setProfile({...profile, phone: event.target.value})}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProfileScreen;