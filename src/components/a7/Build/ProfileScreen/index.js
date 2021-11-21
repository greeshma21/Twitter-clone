import React from "react";
import NavigationSidebar from "../NavigationSidebar/index";
import PostSummaryList from "../PostSummaryList";
import ProfilePage from "./ProfilePage";
import {Link} from "react-router-dom";
import WhatsHappening from "../WhatsHappening";
import TweetList from "../TweetList";

const ProfileScreen = () => {
    /*return (
        <div>
            <div className="row pt-3">
                <div className="col-3 col-lg-2 col-xl-2">
                    <NavigationSidebar active="profile"/>
                </div>
                <div className="col-9 col-lg-6 col-xl-6">
                    <ProfilePage/>
                </div>
                <div className="col-lg-4 col-xl-4 d-none d-lg-block ps-4">
                    <PostSummaryList title="What's happening"/>
                </div>
            </div>

            <Link to="/a7/practice">
                Practice
            </Link>
        </div>
    );*/
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-6"
                 style={{"position": "relative"}}>
               <ProfilePage/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList title="What's happening"/>
            </div>
        </div>
    )
}

export default ProfileScreen;