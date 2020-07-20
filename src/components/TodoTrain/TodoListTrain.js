import React, { Component } from 'react'
import TodoFormTrain from './TodoFormTrain'



class TodoListTrain extends Component {
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
        const List = this.state.todos.map(todo => <div key={todo.id}>{todo.text}</div>)
        return (
            < div >
                <TodoFormTrain onSubmit={this.addTodo} />
                {List}
            </div>
        )
    }
}

export default TodoListTrain
