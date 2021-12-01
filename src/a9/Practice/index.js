import React from "react";
import {Link} from "react-router-dom";
/*import Classes from "./Classes";
import Styles from "./Styles";
/!*import ConditionalOutputIfElse from "./ConditionalOutput/ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutput/ConditionalOutputInline";*!/
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";*/
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";
import Movies from "./Movies";

/*const Index = () => {
    return(
        <>
            <h1>Practice</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/build">
                Build
            </Link>
        </>
    )
};*/
/*const Index = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Classes/>
        </div>
    )
};*/

const Index = () => {
    return(
        <div>
            {/*<Link to="/a6/hello">
                Hello
            </Link> |*/}
            <Link to="/a7/twitter/home">Build A7</Link> |
            <Link to="/a7/practice">Practice A7</Link> |
            <Link to="/a8/practice">Practice A8</Link>
            <Link to="/a8/twitter/home">Build A8</Link>
            <Link to="/a9/practice">Practice A9</Link>
            <Link to="/a9/twitter/home">Build A9</Link>
            <h1>Practice</h1>
            <Movies/>
            <APIExamples/>
            <ReduxExamples/>
            {/*<TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>*/}
        </div>
    )
};


export default Index;

