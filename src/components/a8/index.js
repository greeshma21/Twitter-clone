import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build/Build";
/*import who from "../../reducers/who";
import tweets from "../../reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);*/
/*import HelloWorld from "./HelloWorld";
import Index from "./Practice";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./Build/HomeScreen/HomeScreen";*/

const A8 = () => {
    return(
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a8/twitter">
                    <Build/>
                </Route>

            </div>
        </BrowserRouter>
    )
}

export default A8;

/*import Practice from './Practice';
import {BrowserRouter, Route} from "react-router-dom";
import Build from './Build/Build';


const A7 = () => {
    return (
        <BrowserRouter>
            <div className="container">


                <Route path={["/", "/a7", "/a7/practice"]}exact={true}>
                    <Practice/>
                </Route>

                <Route path="/a7/twitter">
                    <Build/>
                </Route>



            </div>
        </BrowserRouter>
    );
}

export default A7;*/
