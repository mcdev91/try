import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(this.state.username)
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
        console.log(this.state.comments)
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
        console.log(this.state.topic)
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }

    render() {
        const { username, comments, topic } = this.state;
        const { handleSubmit, handleUsernameChange, handleCommentsChange, handleTopicChange } = this;
        return (
            <div>
                <h1>Form Component</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            value={username}
                            onChange={handleUsernameChange}
                            type='text'
                            placeholder='username'
                        />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea
                            value={comments}
                            onChange={handleCommentsChange}>
                        </textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={handleTopicChange}>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Vue</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                <div>
                    <h1>{this.state.username}</h1>
                </div>
            </div>
        )
    }
}

export default Form
