const Todo = (props) => (
    <div style={{ display: "flex", margin: 10 }}>
        <button onClick={props.deleteTodo}>❌</button>
        <div style={{ textDecoration: props.todo.complete ? "line-through" : "", margin: 4 }} onClick={props.toggleComplete}>
            {props.todo.text}
        </div>
    </div >
)

export default Todo;