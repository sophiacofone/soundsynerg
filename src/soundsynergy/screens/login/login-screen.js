import React from "react";
import {useSelector} from "react-redux";

function LoginScreen() {
    const {user} = useSelector((state) => state.user);
    return (
        <div>
            <div className="container mx-auto w-50 text-center ">
                <h1>Login</h1>
                <h1><i className="bi bi-music-note-beamed"></i></h1>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>



    );
}

export default LoginScreen;