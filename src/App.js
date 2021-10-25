//import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/a6/HelloWorld";
import Build from "./components/a6/Build/Build";
import Index from "./components/a6/Practice/index";
import {BrowserRouter,Route} from "react-router-dom";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";

function App() {
  return (
      /*<div className="App">
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
      </div>*/
      <BrowserRouter>
      <div className="container">
          <Route path="/a6/hello"exact={true}>
          <HelloWorld/>
          </Route>
          <Route path="/a6/build" exact={true}>
          <Build/>
          </Route>
          <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
          <Index/>
          </Route>
          <Route path="/a6/twitter/explore" component={ExploreScreen}/>
          <Route path="/a6/twitter/home" component={HomeScreen}/>
      </div>
      </BrowserRouter>

  );
}

export default App;