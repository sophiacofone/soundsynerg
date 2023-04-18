import React, {useState} from "react";

function EditProfileModal({currentUser, onClose, onUpdateProfile}) {
    const [updatedProfile, setUpdatedProfile] = useState({
        ...currentUser,
        /*firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        username: currentUser.username || '',
        password: currentUser.password || '',
        email: currentUser.email || '',
        phone: currentUser.phone || '',
        address: currentUser.address || '',
        bio: currentUser.bio || '',
        city: currentUser.city || '',
        state: currentUser.state || '',
        profilePic: currentUser.profilePic || '',
        dob: currentUser.dob || ''*/
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdateProfile(updatedProfile);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputFirstName" className="text-muted custom-text-size-loc">First
                    Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    placeholder="First name"
                    value={updatedProfile.firstName}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, firstName: event.target.value})}
                />
                <label htmlFor="inputLastName" className="text-muted custom-text-size-loc">Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Last name"
                    value={updatedProfile.lastName}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, lastName: event.target.value})}
                />
                <label htmlFor="inputUserName" className="text-muted custom-text-size-loc">User Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputUserName"
                    placeholder="User Name"
                    value={updatedProfile.username}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, userName: event.target.value})}
                />
                <label htmlFor="inputBio" className="text-muted custom-text-size-loc">Bio</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputBio"
                    placeholder="Bio"
                    value={updatedProfile.bio}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, bio: event.target.value})}
                />
                <label htmlFor="inputLocation" className="text-muted custom-text-size-loc">Location</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputLocation"
                    placeholder="City"
                    value={updatedProfile.city}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, city: event.target.value})}
                />
                <input
                    type="text"
                    className="form-control"
                    id="inputLocation"
                    placeholder="State"
                    value={updatedProfile.state}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, state: event.target.value})}
                />
                <label htmlFor="inputDateOfBirth" className="text-muted custom-text-size-loc"> Birth
                    date</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputDateOfBirth"
                    placeholder="Date of Birth"
                    value={updatedProfile.dateOfBirth}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, dateOfBirth: event.target.value})}
                />
                <label htmlFor="inputPrivateLocation" className="text-muted custom-text-size-loc">Additional location
                    info</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputPrivateLocation"
                    placeholder="Address"
                    value={updatedProfile.address}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, address: event.target.value})}
                />
                <input
                    type="text"
                    className="form-control"
                    id="inputPrivateLocation"
                    placeholder="Zip code"
                    value={updatedProfile.zip}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, zip: event.target.value})}
                />
                <input
                    type="text"
                    className="form-control"
                    id="inputPrivateLocation"
                    placeholder="Country"
                    value={updatedProfile.country}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, country: event.target.value})}
                />
                <label htmlFor="inputEmail" className="text-muted custom-text-size-loc">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email"
                    value={updatedProfile.email}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, email: event.target.value})}
                />
                <label htmlFor="inputPhone" className="text-muted custom-text-size-loc">Phone number</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Email"
                    value={updatedProfile.phone}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, phone: event.target.value})}
                />
                <label htmlFor="inputPassword" className="text-muted custom-text-size-loc">Password</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    value={updatedProfile.password}
                    onChange={(event) => setUpdatedProfile({...updatedProfile, password: event.target.value})}
                />
            <button type="submit">Save</button>
        </form>
    <button onClick={onClose}>Close</button>
</div>
);
}

export default EditProfileModal;