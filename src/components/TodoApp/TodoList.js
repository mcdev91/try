import React from 'react'
import TodoForm from './TodoForm'

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

    render() {
        const List = this.state.todos.map(todo => <div key={todo.id}>{todo.text}</div>)
        console.log(List)
        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />
                {List}
            </div>
        )
    }
}

export default TodoList
