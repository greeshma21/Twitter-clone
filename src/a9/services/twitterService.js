/*
/!*const TWEET_API = 'http://localhost:4000/api/tweets';

export const fetchAllTweets = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets =>
            dispatch({
                type: 'fetch-all-tweets',
                tweets
            })
        );
export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );

export const deleteTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
        type: 'delete-tweet',
        tweet
    }));
export const likeTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'like-tweet',
                tweet
            }));*!/


/!*const TWEET_API = 'http://localhost:4000/api/tweets';

export const fetchAllTweets = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets =>
            dispatch({
                type: 'fetch-all-tweets',
                tweets
            })
        );
export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );

export const deleteTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
        type: 'delete-tweet',
        tweet
    }));
export const likeTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'like-tweet',
                tweet
            }));*!/
/!*
export default {
    fetchAllTweets, deleteTweet, postNewTweet
};*!/




/!*const URL = 'http://localhost:4000/rest/tweets';

export const fetchAllTweets = () =>
    fetch(URL)
        .then(response => response.json());

export const deleteTweet = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

export const postNewTweet = (tweet) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const likeTweet = (dispatch, tweet) =>
    fetch(`${URL}/${tweet._id}/like`, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'like-tweet',
                tweet
            }))

export default {
    fetchAllTweets, deleteTweet, postNewTweet
};*!/


/!*const TWEET_API = 'http://localhost:4000/rest/tweets';

export const findAllTweets = () =>
    fetch(TWEET_API).then(response => response.json());

export const postNewTweet = (dispatch ,newTweet) => {
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );
}

export const deleteTweet = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

export const likeTweet = (tweet) => {
    let tweetId = tweet["_id"].toString();
    console.log("a9 tweet id to be liked/unliked", tweetId);
    fetch(`${TWEET_API}/${tweetId}`, {
        method: 'PUT',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
}

export default {
    findAllTweets
    , postNewTweet, deleteTweet, likeTweet
};*!/

const TWEET_API = 'http://localhost:4000/rest/tweets';
export const fetchAllTweets = () =>
    fetch(TWEET_API).then(response => response.json());
export const postNewTweet = (dispatch ,newTweet) => {
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );
}

export const deleteTweet = (id) =>{
    console.log("id to be deleted", id, typeof (id));
    fetch(`${TWEET_API}/${id}`, {
        method: 'DELETE',
    });
}


export const likeTweet = (tweet) => {
    let tweetId = tweet["_id"].toString();
    console.log("a9 tweet id to be liked/unliked", tweetId);
    fetch(`${TWEET_API}/${tweetId}`, {
        method: 'PUT',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
}



export default {
    fetchAllTweets, postNewTweet, deleteTweet, likeTweet
};


*/

const TWEET_API = 'http://localhost:4000/rest/tweets';

export const fetchAllTweets = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets =>
            dispatch({
                type: 'fetch-all-tweets',
                tweets
            })
        );
export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );

export const deleteTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
        type: 'delete-tweet',
        tweet
    }));
export const likeTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'like-tweet',
                tweet
            }));





