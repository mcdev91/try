import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class parentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
            <h1>Parent Component with Child Component</h1>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default parentComponent
