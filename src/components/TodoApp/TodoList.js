import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            todosToShow: 'all',
            toggleAllCompleted: true
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

    todoToShow = (string) => {
        this.setState({
            todosToShow: string
        })
    }

    handleDeleteTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    handleDeleteAll = () => {
        this.setState({
            todos: []
        })
    }

    removeAllTodosThatAreComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.completed)
        });
    }

    render() {
        let todos = [];
        if (this.state.todosToShow === 'all') {
            todos = this.state.todos;
        } else if (this.state.todosToShow === 'active') {
            todos = this.state.todos.filter(todo => !todo.completed);
        } else if (this.state.todosToShow === 'completed') {
            todos = this.state.todos.filter(todo => todo.completed);
        }

        return (
            <div>
                <TodoForm
                    onSubmit={this.addTodo}
                />

                <div>
                    Todos Left: {this.state.todos.filter(todo => !todo.completed).length}
                </div>

                <button onClick={this.handleDeleteAll}>
                    Delete All
                </button>


                {this.state.todos.some(todo => todo.completed) ? (<div>
                    {<button onClick={this.removeAllTodosThatAreComplete}>
                        Delete Completed
                    </button>}
                </div>
                ) : null}

                <div>
                    <button onClick={() => this.todoToShow('all')}>
                        All
                    </button>
                    <button onClick={() => this.todoToShow('active')}>
                        Active
                    </button>
                    <button onClick={() => this.todoToShow('completed')}>
                        Completed
                    </button>
                </div>

                <div>
                    <button onClick={() =>
                        this.setState({
                            todos: this.state.todos.map(todo => ({
                                ...todo,
                                completed: this.state.toggleAllCompleted
                            })),
                            toggleAllCompleted: !this.state.toggleAllCompleted
                        })
                    }
                    >
                        Toggle All Complete {`${this.state.toggleAllCompleted}`}
                    </button>
                </div>

                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        deleteTodo={() => this.handleDeleteTodo(todo.id)}
                    />
                ))}

            </div>
        )
    }
}

export default TodoList
