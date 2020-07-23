import React, { Component } from 'react'
import shortid from 'shortid'

export class TodoFormTrain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    handleCHnage = (event) => {
        this.setState({
            text: event.target.value
        })
        console.log(this.state.text)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            completed: false
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='T O D O'
                    onChange={this.handleCHnage}
                    value={this.state.text}
                />
                <button type='submit'>ADD</button>
            </form>
        )
    }
}

export default TodoFormTrain

