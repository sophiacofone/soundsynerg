import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import {registerThunk} from "../../../services/auth-thunk";


function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegister= async (e) => {
        e.preventDefault(); // prevent default form submission behavior
        try {
            await dispatch(registerThunk({ username, password }));
            navigate("/login");
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div>
            <div>
                <div className="container mx-auto w-50 text-center mt-3">
                    <h1 className="h3 mb-3 font-weight-normal">Register Here!</h1>
                    <h2><i className="bi bi-music-note-beamed"></i></h2>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="username"
                                id="inputUser"
                                className="form-control"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required=""
                                autoFocus="">
                            </input>
                            <label htmlFor="inputUser" className="sr-only"></label>
                            <input
                                type="password"
                                id="inputPassword"
                                className="form-control"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required=""
                                autoFocus="">
                            </input>
                            <label htmlFor="inputPassword" className="sr-only"></label>
                        </div>
                        <button className="btn btn-lg btn-primary w-100 mt-2" type="submit">Register</button>
                    </form>
                    <div>
                        <a href="/login" className="btn btn-link">Back to login page</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterScreen;