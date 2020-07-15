import React from 'react'
import shortid from 'shortid'

class TodoForm extends React.Component {
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
        // console.log(this.state.text)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false,
        });
        this.setState({
            text: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name='text'
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder='todo...'
                />
                <button type='submit'>Add</button>
            </form>
        )
    }
}

export default TodoForm
