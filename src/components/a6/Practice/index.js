import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
/*import ConditionalOutputIfElse from "./ConditionalOutput/ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutput/ConditionalOutputInline";*/
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";

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
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/build">
                Build
            </Link>
            <h1>Practice</h1>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    )
};


export default Index;

