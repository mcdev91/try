import React, { Component } from 'react'
import shortid from 'shortid'

export class TodoFormTrain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        })
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder='todo'
                    type='text'
                />
                <button type='submit'>Add</button>
            </form>
        )
    }
}

export default TodoFormTrain
