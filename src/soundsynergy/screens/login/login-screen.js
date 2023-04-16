import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import {loginThunk} from "../../../services/users-thunk";

function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin= async (e) => {
        e.preventDefault(); // prevent default form submission behavior
        try {
            await dispatch(loginThunk({ username, password }));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };
return (
        <div>
            <div className="container mx-auto w-50 text-center mt-3">
                <h1 className="h3 mb-3 font-weight-normal">Please Log in</h1>
                <h2><i className="bi bi-music-note-beamed"></i></h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="inputUser"
                            className="form-control"
                            placeholder="Username"
                            required=""
                            autoFocus="">
                        </input>
                        <label htmlFor="inputUser" className="sr-only"></label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            required="">
                        </input>
                        <label htmlFor="inputPassword" className="sr-only"></label>
                    </div>
                    <button className="btn btn-lg btn-primary w-100 mt-3" type="submit">Login</button>
                </form>
                <div>
                    <a href="/register" className="btn btn-link">Need to register?</a>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;