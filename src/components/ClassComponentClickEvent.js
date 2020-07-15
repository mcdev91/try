import React, { Component } from 'react'

class ClassComponentClickEvent extends Component {

    clickHandler() {
        alert('button clicked')
    }

    render() {
        return (
            <div>
            <h1>Class Component Click Event</h1>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassComponentClickEvent
