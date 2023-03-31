import React from "react";
import {useSelector} from "react-redux";

function HomeScreenLoggedIn() {
    const {user} = useSelector((state) => state.user);
    return (
        <div>
            <div className="card m-3">
                <h3 className="card-header text-center">Welcome {user.firstName} to SoundSynergy!</h3>
                <div className="card-body">
                    <h5 className="card-title text-center">SoundSynergy lets you explore your music, connect with
                        friends that share your taste, and discover new places to meet other music lovers like you <i className="bi bi-stars"></i>
                    </h5>
                </div>
                <div className="card-body p-1">
                    <h1 className="card-title text-center">
                        <i className="bi bi-music-note-beamed"></i>
                    </h1>
                    {/*<h6 className="card-subtitle text-muted text-center"><i className="bi bi-stars"></i>See what's*/}
                    {/*    possible with SoundSynergy, and log in!*/}
                    {/*    <i className="bi bi-stars"></i>*/}
                    {/*</h6>*/}
                </div>
                <div className="card-body">
                    <div className="container marketing">
                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                                </svg>
                                <h2 className="fw-normal">Explore</h2>
                                <p>See stats on your listening history, most popular genres, and more.</p>
                                <p><a className="btn btn-secondary" href="#">View details »</a></p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                                </svg>
                                <h2 className="fw-normal">Connect</h2>
                                <p>Search for any song, and see which of your friends are most likely to enjoy it.</p>
                                <p><a className="btn btn-secondary" href="#">View details »</a></p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                                </svg>
                                <h2 className="fw-normal">Discover</h2>
                                <p>Learn about local resturants, cafes, and shops that play music you will love. </p>
                                <p><a className="btn btn-secondary" href="#">View details »</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    Sound Synergy - Home
                </div>
            </div>
        </div>
    );
}

export default HomeScreenLoggedIn;