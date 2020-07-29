import React, { Component } from 'react'
import TodoFormTrain from './TodoFormTrain'

/*
  TodoMVC
  1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off
*/

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
        const List = this.state.todos.map(todo => <div key={todo.id}>{todo.todo}</div>)
        return (
            <div>
                <div>train</div>
                <TodoFormTrain onSubmit={this.addTodo} />
                {List}
            </div>
        )
    }
}

export default TodoListTrain
