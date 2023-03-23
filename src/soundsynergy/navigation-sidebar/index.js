import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = (
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div>
            <div className="list-group">
                <a className="list-group-item"><i className="bi bi-twitter"></i></a>
                <Link to="/tuiter/home"  className={`list-group-item
                        ${active === 'home'?'active':''}`}>
                    <i className="bi bi-house"></i>
                    <span className="d-none d-xl-inline m-lg-1">Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item
                        ${active === 'explore'?'active':''}`}>
                    <i className="bi bi-hash"></i>
                    <span className="d-none d-xl-inline m-lg-1">Explore</span>
                </Link>
                <Link to="/" className="list-group-item">
                    Labs
                </Link>
                <a className={`list-group-item
                        ${active === 'notifications'?'active':''}`}>
                    <i className="bi bi-bell"></i>
                    <span className="d-none d-xl-inline m-lg-1">Notifications</span>
                </a>
                <a className={`list-group-item
                        ${active === 'messages'?'active':''}`}>
                    <i className="bi bi-envelope"></i>
                    <span className="d-none d-xl-inline m-lg-1">Messages</span>
                </a>
                <a className={`list-group-item
                        ${active === 'bookmarks'?'active':''}`}>
                    <i className="bi bi-bookmark"></i>
                    <span className="d-none d-xl-inline m-lg-1">Bookmarks</span>
                </a>
                <a className={`list-group-item
                        ${active === 'lists'?'active':''}`}>
                    <i className="bi bi-list-task"></i>
                    <span className="d-none d-xl-inline m-lg-1">Lists</span>
                </a>
                <a className={`list-group-item
                        ${active === 'profile'?'active':''}`}>
                    <i className="bi bi-person"></i>
                    <span className="d-none d-xl-inline m-lg-1">Profile</span>
                </a>
                <a className={`list-group-item
                        ${active === 'more'?'active':''}`}>
                    <i className="bi bi-three-dots"></i>
                    <span className="d-none d-xl-inline m-lg-1">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a
                    className="btn btn-primary btn-block rounded-pill">
                    Tuit
                </a>
            </div>
        </div>

    );
};

export default NavigationSidebar;

