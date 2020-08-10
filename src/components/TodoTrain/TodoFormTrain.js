import React, { Component } from 'react'
import shortid from 'shortid'

/*
  TodoMVC
  1. add todo +
  2. display todos +
  3. cross off todo +
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off
*/

class TodoFormTrain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    handleChange = event => {
        this.setState({
            text: event.target.value
        })
        console.log(this.state.text)
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            completed: false
        })
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='todo'
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <button type='submit'>Add</button>
            </form>
        )
    }
}

export default TodoFormTrain