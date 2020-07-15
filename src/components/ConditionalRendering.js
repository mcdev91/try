import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return this.state.isLoggedIn && <div>This is {this.props.name}</div>

        // return (
        //     this.state.isLoggedIn ? (
        //         <div>Welcome CR</div>
        //     ) : (
        //             <div>Welcome Q</div>)
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome CR</div>
        // } else {
        //     message = <div>Welcome Q</div>
        // }
        // return <div>{message}</div>

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Conditional Rendering</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Quest</div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Welcome Conditional Rendering</div>
        //         <div>Welcome Quest</div>
        //     </div>
        // )
    }
}

export default ConditionalRendering
