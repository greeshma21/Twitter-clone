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
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import PostSummaryList from "./PostSummaryList";
import {Link} from "react-router-dom";
import PostItem from "./HomeScreen/PostItem";
import HomeIndex from "./HomeScreen";
import HomeScreen from "./HomeScreen/HomeScreen";

const Build = () => {
    return(
        <>
           {/* <NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowList/>*/}
            <ExploreScreen/>
            {/*<HomeIndex/>*/}
            {/*<HomeScreen/>*/}
            {/*<PostSummaryList/>*/}
            {/*<Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>*/}
        </>
    )
};
export default Build;
