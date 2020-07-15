import React, { Component } from 'react'

class ClassComponent extends Component {
    render() {
        const { name } = this.props
        // const {state1, state2} = this.props
        return (
            <div>
                <h1>CLASS COMPONENT</h1>
                <p>props</p>
                <h1>{name}</h1>
                <ol>
                    <li>More future rich.</li>
                    <li>Maintain their own private date - State.</li>
                    <li>Complex UI logic.</li>
                    <li>Provide Lifecycle hooks.</li>
                </ol>
            </div>
        )
    }
}

export default ClassComponent