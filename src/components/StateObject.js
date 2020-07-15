import React, { Component } from 'react'

class StateObject extends Component {
    constructor() {
        super()
        this.state = {
            data: 'state'
        }
    }
    changeData() {
        this.setState({
            data: 'state changed'
        })
    }

    render() {
        return (
            <div>
                <h1>STATE OBJECT</h1>
                <p>{this.state.data}</p>
                <button onClick={() => this.changeData()}>Change State</button>
            </div>
        )
    }
}

export default StateObject