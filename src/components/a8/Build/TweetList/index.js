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

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../../../services/twitterService";

const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), []) // eslint-disable-line react-hooks/exhaustive-deps
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

