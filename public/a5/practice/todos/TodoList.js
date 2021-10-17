import TodoItem from "./TodoItem.js";
import todos from "./todos.js";

const TodoList = () => {
    return(`
        <ul>
            <li>Buy milk</li>
            <li>Pickup the kids</li>
            <li>Walk the dog</li>
        </ul>
    `);
}
/*export default TodoList;*/


const TodoList1 = () => {
    return(`
        <ul>
            ${TodoItem('Buy milk')}
            ${TodoItem('Pickup the kids')}
            ${TodoItem('Walk the dog')}
        </ul>
    `);
}
/*export default TodoList1;*/


const TodoList2 = () => {
    return(`
        <ul>
            ${
        todos.map(todo => {
            return(TodoItem(todo));
        }).join('')
    }
        </ul>
    `);
}
export default TodoList2;



