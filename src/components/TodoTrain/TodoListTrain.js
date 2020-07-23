import React, { Component } from 'react'
import TodoFormTrain from './TodoFormTrain'

export class TodoListTrain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    render() {
        return (
            <div>
                <TodoFormTrain onSubmit={this.addTodo} />
                {this.state.todos.map(todo => (
                    <div key={todo.id}>{todo.text}</div>
                ))}
            </div>
        )
    }
}

export default TodoListTrain
