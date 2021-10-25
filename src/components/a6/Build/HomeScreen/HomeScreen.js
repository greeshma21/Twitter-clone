import NavigationSidebar from "../NavigationSidebar";
import HomeIndex from "./index";
import PostSummaryList from "../PostSummaryList";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-6">
                <HomeIndex/>
            </div>
            <div className="col-4">
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default HomeScreen;