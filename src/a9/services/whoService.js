const WHO_API = 'http://localhost:4000/rest/who';

export const findAllWho = (dispatch) =>
    fetch(WHO_API)
        .then(response => response.json())
        .then(tweets =>
            dispatch({
                type: 'find-all-who',
                tweets
            })
        );