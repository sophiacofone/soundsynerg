import React from "react";
import "./index.css";
const PostListItem = (
    {
        post = {   name: 'Elon Musk',
            avatarIcon: 'ice.jpeg',
            userName: 'elonmusk',
            time: '2h',
            image: 'Killer-whale.jpeg',
            title: 'Amazing show about xyz mission',
            contenta:'que sunt in culpa qui officia deserunt molli',
            contentb:'sto odio dignissimos duc',
            comments: '2.2K',
            retuit: '4.2K',
            likes: '5.2K',
        }
    }
) => {
    return(
        <div className="list-group">
            <li className="list-group-item rounded-0">
                <div className="row">
                    <div className="col-1">
                        <img className="rounded-circle img-custom-sm img-fluid" src={`./images/${post.avatarIcon}`}/>
                    </div>
                    <div className="col-10">
                        <div>
                            <span className="bold">{post.name}</span>
                            <span className="m-lg-1"><i className="bi bi-check-circle-fill"></i></span>
                            <span className="text-muted">@{post.userName}</span>
                            <span className="text-muted">-</span>
                            <span className="text-muted">{post.time}</span>
                        </div>
                        <div>{post.title}</div>
                    </div>
                    <div className="col-1 p-0">
                        <i className="bi bi-three-dots float-right"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="card mt-2">
                        <img className="card-img-top" src={`./images/${post.image}`}/>
                        <div className="card-body">
                            <p className="card-text">{post.contenta}</p>
                            <p className="card-text text-muted">{post.contentb}</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-3">
                        <div>
                            <span><i className="bi bi-chat m-lg-3"></i></span>
                            <span>{post.comments}</span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <span><i className="bi bi-arrow-left-right m-lg-3"></i></span>
                            <span>{post.retuit}</span>
                            </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <span><i className="bi bi-heart m-lg-3"></i></span>
                            <span>{post.likes}</span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <span><i className="bi bi-arrow-bar-up"></i></span>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
};
export default PostListItem;