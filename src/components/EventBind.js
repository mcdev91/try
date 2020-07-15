import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'HELLO'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'GOODBYE'
        })
        console.log(this)
    }

    // clickHandler = () => {
    //     this.setState({
    //         message: 'goodbye'
    //     })
    // }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> not be useful*/}
                {/* <button onClick={() => this.clickHandler()}>Click</button> not be useful*/}
                <button onClick={this.clickHandler}>Click</button>
                {/* <button onClick={this.clickHandler}>Click</button> */}
            </div>
        )
    }
}

export default EventBind
