import React, { Component } from 'react'
import LifeCycleA from './LifeCycleA'
import LifeCycleC from './LifeCycleC'

export class ClassComLifeCycleMethods extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Mounting</h1>
                    <div>
                        When an instance of component is being created and inserted into the DOM
                    </div>
                    <div>
                        constructor, static getDerivedStateFromProps, render and componentDidMount
                    </div>
                    <LifeCycleA />
                </div>
                <div>
                    <h1>Updating</h1>
                    <div>
                        When a component is being re-rendered as a result of changes to either its props or state
                    </div>
                    <div>
                        static getDerivedStateFromProps, shouldComponentUpdate, render, getShanpshotBeforeUpdate and componentDidUpdate
                    </div>
                    <LifeCycleC />
                </div>
                <div>
                    <h1>Unmounting</h1>
                    <div>
                        When component is being removed from the DOM
                    </div>
                    <div>
                        componentWilUnmount
                    </div>
                </div>
                <div>
                    <h1>Error handling</h1>
                    <div>
                        When there is an error during rendering, in lifecycle method, or in a constructor of any child component
                    </div>
                    <div>
                        static getDerivedStateFromError and componentDidCatch
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassComLifeCycleMethods
