import React, { Component } from 'react'
import LifeCycleD from './LifeCycleD'

class LifeCycleC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Name'
        }
        console.log('LifeCycleC constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleC getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleC componentDidMount method')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleC shouldComponentUpdate method')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifeCycleC get shanpShotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleC componentDidUpdate method')
    }

    changeState = () => {
        this.setState({
            name: 'name changed'
        })
    }

    render() {
        console.log('LifeCycleC render')
        return (
            <div>
                <div>LifeCycleC</div>
                <button onClick={this.changeState}>ChangeState</button>
                <LifeCycleD />
            </div>
        )
    }
}

export default LifeCycleC
