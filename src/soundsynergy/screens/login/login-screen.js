import React from "react";
import {useSelector} from "react-redux";

function LoginScreen() {
    const {user} = useSelector((state) => state.user);
    return (
        <div>
            <div className="container mx-auto w-50 text-center mt-3">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <h2><i className="bi bi-music-note-beamed"></i></h2>
                <form>
                    <div className="form-group">
                        <input type="username" id="inputUser" className="form-control" placeholder="Username" required="" autoFocus=""></input>
                        <label htmlFor="inputUser" className="sr-only"></label>
                        <label htmlFor="inputPassword" className="sr-only"></label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""></input>
                    </div>
                    <button className="btn btn-lg btn-primary w-100 mt-3" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;