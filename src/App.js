import './App.css';
import HelloWorld from "./components/a6/HelloWorld";
import Build from "./components/a6/Build/Build";
import Index from "./components/a6/Practice/index";
import {BrowserRouter, Link, Route} from "react-router-dom";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import A6 from "./components/a6";
import A7 from "./components/a7";
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <Link to="/a6/practice">Assignment6</Link> |
                <Route path="/a6">
                    <A6/>
                </Route>
                <Link to="/a7/practice">Assignment7</Link>
                <Route path="/a7">
                    <A7/>
                </Route>
                {/*<Route path="/a6/hello"exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/a6/build" exact={true}>
                    <Build/>
                </Route>
                <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                    <Index/>
                </Route>
                <Route path="/a6/twitter/explore" component={ExploreScreen}/>
                <Route path="/a6/twitter/home" component={HomeScreen}/>*/}
            </div>
        </BrowserRouter>
        </Provider>
    );
}

export default App;

/*import './App.css';
import './vendors/bootstrap/bootstrap.min.css'

import {BrowserRouter, Link, Route} from "react-router-dom";


import A7 from './components/a7';
import A6 from './components/a6';

function App() {
    return (
        <BrowserRouter>
            <div className="container">

                <Link to = "/a7/practice">
                    Link to A7
                </Link>
                <Route path={"/a7"}>
                    <A7/>
                </Route>

                <Link to = "/a6/practice">
                    Link to A6
                </Link>
                <Route path={"/a6"}>
                    <A6/>
                </Route>

            </div>
        </BrowserRouter>
    );
}

export default App;*/

/*
//import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/a6/HelloWorld";
// import Build from "./components/a6/Build/Build";
import Index from "./components/a6/Practice/index";
import {BrowserRouter,Route} from "react-router-dom";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
/!*import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";*!/
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build/Build";
/!*import tweets from "./reducers/tweets";*!/
/!*import {Provider} from "react-redux";
import who from "./components/a7/Build/reducers/who";
import tweets from "./components/a7/Build/reducers/tweets";
import {combineReducers, createStore} from "redux";
const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);*!/
// import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen";
// import HomeScreen from "./components/a7/Build/HomeScreen/HomeScreen";


function App() {
  return (
      /!*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*!/
      /!*<Provider store={store}>*!/
      <BrowserRouter>
      <div className="container">
         {/!* <Route path="/a6/hello"exact={true}>
          <HelloWorld/>
          </Route>
          <Route path="/a6/build" exact={true}>
          <Build/>
          </Route>
          <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
          <Index/>
          </Route>
          <Route path="/a6/twitter/explore" component={ExploreScreen}/>
          <Route path="/a6/twitter/home" component={HomeScreen}/>*!/}


          <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
              <Practice/>
          </Route>
          <Route path="/a7/twitter">
              <Build/>
          </Route>
          {/!*<Route path="/a7/twitter/explore" component={ExploreScreen}/>
          <Route path="/a7/twitter/home" component={HomeScreen}/>*!/}


      </div>
      </BrowserRouter>
      /!*</Provider>*!/
  );
}

export default App;

/!*!//import logo from './logo.svg';
import './App.css';
// import HelloWorld from "./components/a6/HelloWorld";
// import Build from "./components/a6/Build/Build";
// import Index from "./components/a6/Practice/index";
import {BrowserRouter,Route} from "react-router-dom";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
/!*import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";*!/
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build/Build";
/!*import tweets from "./reducers/tweets";*!/
/!*import {Provider} from "react-redux";
import who from "./components/a7/Build/reducers/who";
import tweets from "./components/a7/Build/reducers/tweets";
import {combineReducers, createStore} from "redux";
const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);*!/
// import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen";
// import HomeScreen from "./components/a7/Build/HomeScreen/HomeScreen";


function App() {
    return (
        /!*<div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>*!/
        /!*<Provider store={store}>*!/
            <BrowserRouter>
                <div className="container">
                    {/!* <Route path="/a6/hello"exact={true}>
          <HelloWorld/>
          </Route>
          <Route path="/a6/build" exact={true}>
          <Build/>
          </Route>
          <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
          <Index/>
          </Route>
          <Route path="/a6/twitter/explore" component={ExploreScreen}/>
          <Route path="/a6/twitter/home" component={HomeScreen}/>*!/}


                    <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                        <Practice/>
                    </Route>
                    <Route path="/a7/twitter">
                        <Build/>
                    </Route>
                    {/!*<Route path="/a7/twitter/explore" component={ExploreScreen}/>
          <Route path="/a7/twitter/home" component={HomeScreen}/>*!/}


                </div>
            </BrowserRouter>
        /!*</Provider>*!/
    );
}

export default App;*!/
*/
