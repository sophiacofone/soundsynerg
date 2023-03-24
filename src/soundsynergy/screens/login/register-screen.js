import React, { useState } from "react";
import {useSelector} from "react-redux";
// import { connect } from 'react-redux';
// import { registerUser } from '../actions/authActions';


function RegisterScreen() {
    const [formData, setFormData] = useState({
        username: 'Alice11',
        email: '123@gmail.com',
        password: '12345',
        firstName: 'Alice',
        lastName: 'Wonderland',
    });
    const { username, email, password, firstName, lastName } = formData;
    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    // const onSubmit = async e => {

    return (
        <div>
            <div>
                <div className="container mx-auto w-50 text-center mt-3">
                    <h1 className="h3 mb-3 font-weight-normal">Register Here!</h1>
                    <h2><i className="bi bi-music-note-beamed"></i></h2>
                    <form>
                        <div className="form-group">
                            <input
                                type="email"
                                id="inputEmail"
                                className="form-control"
                                placeholder="Enter Email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                required=""
                                autoFocus="">
                            </input>
                            <label htmlFor="inputEmail" className="sr-only"></label>
                            <input
                                type="username"
                                id="inputUser"
                                className="form-control"
                                placeholder="Enter Username"
                                value={username}
                                onChange={handleChange}
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
                                onChange={handleChange}
                                required=""
                                autoFocus="">
                            </input>
                            <label htmlFor="inputPassword" className="sr-only"></label>
                            <input
                                type="firstName"
                                id="inputFirstName"
                                className="form-control"
                                placeholder="Enter First Name"
                                value={firstName}
                                onChange={handleChange}
                                required="">
                            </input>
                            <label htmlFor="inputFirstName" className="sr-only"></label>
                            <input
                                type="lastName"
                                id="inputLastName"
                                className="form-control"
                                placeholder="Enter Last Name"
                                value={lastName}
                                onChange={handleChange}
                                required="">
                            </input>
                            <label htmlFor="inputLastName" className="sr-only"></label>
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