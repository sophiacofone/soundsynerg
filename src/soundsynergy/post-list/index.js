import React from "react";
import postArray from './post.json';
import PostListItem from "./post-list-item";

const Index = () => {
    return(
        <ul className="list-group bold">
            {
                postArray.map(post =>
                    <PostListItem
                        key={post._id}
                        post={post}/>
                )
            }
        </ul>
    );
};

export default Index;