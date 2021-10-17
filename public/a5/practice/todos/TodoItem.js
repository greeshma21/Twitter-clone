const TodoItem = (todo) => {
    return(`
        <li>${todo}</li>
    `);
}
/*export default TodoItem;*/

const TodoItem1 = (todo) => {
    return(`
        <li>
            ${todo.title}
            (${todo.status})
        </li>
    `);
}
/*export default TodoItem1;*/

const TodoItem2 = (todo) => {
    return(`
        <li>
            <input type="checkbox"
                ${todo.done ? 'checked' : ''}/>
            ${todo.title}
            (${todo.status})
        </li>`);
}
export default TodoItem2;


