import React from "react"
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default class TodoList extends React.Component {
    state = {
        todos: [],
        todoToShow: "all",
        toggleAllComplete: true
    }

    addTodo = (todo) => {
        if (todo.text.length !== 0) {
            this.setState(state => ({
                todos: [todo, ...state.todos]
            }))
        }
    }

    deleteTodo = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }))
    }

    deleteAllCompleteTodo = () => {
        this.setState(state => ({
            todos: state.todos.filter(todo => !todo.complete)
        }))
    }

    toggleComplete = (id) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        }))
    }

    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s
        })
    }

    toggleAllComplete = () => {
        this.setState(state => ({
            todos: state.todos.map(todo => ({
                ...todo,
                complete: state.toggleAllComplete
            })),
            toggleAllComplete: !state.toggleAllComplete
        }))
    }

    render() {
        let todos = []

        if (this.state.todoToShow === "all") {
            todos = this.state.todos
        } else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete)
        } else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete)
        }

        return (
            <div style={{ width: "250px", margin: "0 auto" }}>
                <h4 style={{ textTransform: "uppercase" }}>
                    Todos left: {this.state.todos.filter(todo => !todo.complete).length}
                </h4>

                <TodoForm onSubmit={this.addTodo} />

                <button onClick={() => this.updateTodoToShow("all")}>all</button>
                <button onClick={() => this.updateTodoToShow("active")}>active</button>
                <button onClick={() => this.updateTodoToShow("complete")}>complete</button>
                <button onClick={this.toggleAllComplete}>mark all as {this.state.toggleAllComplete ? "complete" : "active"}</button>
                {this.state.todos.some(todo => todo.complete) ? <button onClick={this.deleteAllCompleteTodo}>delete all complete todos</button> : null}
                <h4 style={{ textTransform: "uppercase" }}>
                    {this.state.todoToShow}
                </h4>
                <div>
                    {todos.map(todo => (
                        <Todo
                            key={todo.id}
                            deleteTodo={() => this.deleteTodo(todo.id)}
                            toggleComplete={() => this.toggleComplete(todo.id)}
                            todo={todo}
                        />
                    ))}
                </div>
            </div >
        )
    }
}