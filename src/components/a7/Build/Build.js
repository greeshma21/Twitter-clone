/*import React from "react";
import {Link} from "react-router-dom";

const Build = () => {
    return(
        <>
            <h1>Build</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
        </>
    )
};

export default Build;*/

import React from "react";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/index";
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who})

const store = createStore(reducer);


const Build = () => {
    return(
        <Provider store={store}>
        <div>
            <Route path={["/", "/a7/twitter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path="/a7/twitter/explore"
                   exact={true} component={ExploreScreen}/>
        </div>
        </Provider>
    );
};
export default Build;

/*import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";

import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import PostSummaryList from "./PostSummaryList";
import {Link} from "react-router-dom";
import PostItem from "./HomeScreen/PostItem";
import HomeIndex from "./HomeScreen";
import HomeScreen from "./HomeScreen/HomeScreen";*/

/*const Build = () => {
    return(
        <>
           {/!* <NavigationSidebar active="home"/>*!/}
            {/!*<WhoToFollowList/>*!/}
            <ExploreScreen/>
            {/!*<HomeIndex/>*!/}
            {/!*<HomeScreen/>*!/}
            {/!*<PostSummaryList/>*!/}
            {/!*<Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>*!/}
        </>
    )
};
export default Build;*/