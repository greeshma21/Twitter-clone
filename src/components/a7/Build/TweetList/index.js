/*import React from "react";
import tweets from "./tweets.json";
import TweetListItem from "./TweetListItem";

const TweetList = () => {
    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <TweetListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};
export default TweetList;*/

import React from "react";
import {useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";

const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
    const tweets = useSelector(selectAllTweets);
    return(
        <>
            <ul className="list-group">
                {
                    tweets.map(tweet =>
                        <TweetListItem tweet={tweet}/>
                    )
                }
            </ul>
        </>
    )
};

export default TweetList;

