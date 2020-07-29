import React, { Component } from 'react'
import shortid from 'shortid'

export class TodoFormTrain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: ''
        }
    }

    handleChange = event => {
        this.setState({
            todo: event.target.value
        })
        console.log(this.state.todo)
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            todo: this.state.todo,
            complete: false
        })
        this.setState({
            todo: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.todo}
                    onChange={this.handleChange}
                    type='text'
                    placeholder='add todo'
                />
                <button type='submit'>ADD</button>
            </form>
        )
    }
}

export default TodoFormTrain
