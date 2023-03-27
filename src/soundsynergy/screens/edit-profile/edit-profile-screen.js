import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateUser} from "../../redux/user-reducer";

function EditProfileScreen() {
    const {user} = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch();
    const handleSaveButton = () => {
        dispatch(updateUser(profile));
    };
    return(
        <div>
            <h1>
                <button onClick={handleSaveButton}>Save</button>
                Profile
            </h1>
            <label>First name</label>
            <input
                value={profile.firstName}
                onChange={(e) => setProfile({...profile, firstName: e.target.value})}
            />
            <label>Last name</label>
            <input
                value={profile.lastName}
                onChange={(e) => setProfile({...profile, lastName: e.target.value})}
            />
            <label>Email</label>
            <input
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
            />
            <label>Phone</label>
            <input
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
            />
            <label>Address</label>
            <input
                value={profile.address}
                onChange={(e) => setProfile({...profile, address: e.target.value})}
            />
        </div>
    );
}

export default EditProfileScreen;