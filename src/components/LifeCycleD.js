import React, { Component } from 'react'

class LifeCycleD extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Name'
        }
        console.log('LifeCycleD constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleD getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleD componentDidMount method')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleD shouldComponentUpdate method')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifeCycleD getShanpShotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleD componentDidUpdate method')
    }

    render() {
        console.log('LifeCycleD render')
        return (
            <div>
                LifeCycleD
            </div>
        )
    }
}

export default LifeCycleD