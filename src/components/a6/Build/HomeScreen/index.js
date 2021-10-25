import React from "react";
import PostSummaryItem from "./PostItem";
import post from "./post1.json";

const HomeIndex = () => {
    return (
            <ul className="list-group">
                <li className="list-group-item">
                    {
                        post.map(post1 => {
                            return (
                                <PostSummaryItem post1={post1}/>
                            )
                        })
                    }
                </li>      
            </ul>
    );
}
export default HomeIndex;