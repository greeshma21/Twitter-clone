import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
//import WhoToFollowList from "../WhoToFollowList/Build.js";
import PostItem from "../PostSummaryList/index.js"
import ExploreComponent from "../../build/PostSummaryList/index.js";

       // "../PostSummaryList/PostItem.js";
(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2">
            ${NavigationSidebar('home')}
        </div>
        <div class="col-6">
        ${PostItem()}
        </div>
        <div class="col-4">
        ${ExploreComponent()}
        </div>
        </div>
    `);
})($);
 /*<div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    ${WhoToFollowList()}
</div>*/