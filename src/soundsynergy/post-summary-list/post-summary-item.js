import React from "react";
const PostSummaryItem = (
    {

        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item rounded-0">
            <div className="row">
                <div className="col-10">
                    <div className="text-muted">{post.topic}</div>
                    <div>
                        <span className="fw-bold">{post.userName}</span>
                        <span className="m-lg-1"><i className="bi bi-check-circle-fill"></i></span>
                        <span className="text-muted">-</span>
                        <span className="text-muted">{post.time}</span>
                    </div>
                    <div className="fw-bold">{post.title}</div>
                </div>
                <div className="col-2 p-0">
                    <img className="w-100 h-100 rounded float-right" src={`./images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;