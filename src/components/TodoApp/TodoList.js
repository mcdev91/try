import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    };

    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    };

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    render() {
        return (
            <div>
                <TodoForm
                    onSubmit={this.addTodo}

                />
                <div>Todos Left: {this.state.todos.filter(todo => !todo.complete).length}</div>
                <hr />
                {this.state.todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                    />
                ))}
            </div>
        )
    }
}

export default TodoList
