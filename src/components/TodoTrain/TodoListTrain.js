import React, { Component } from 'react'
import TodoFormTrain from './TodoFormTrain'
import TodoTrain from './TodoTrain'

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
                    <TodoTrain 
                        key={todo.id}
                        todo={todo}
                    />
                ))}

            </div>
        )
    }
}

export default TodoListTrain
