import React, { Component } from 'react'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import Jsx from './components/Jsx'
import StateObject from './components/StateObject'
import Counter from './components/Counter'
import FunctionalComponentClickEvent from './components/FunctionalComponentClickEvent'
import ClassComponentClickEvent from './components/ClassComponentClickEvent'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import ConditionalRendering from './components/ConditionalRendering'
import ListRendering from './components/ListRendering'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form'
import TodoList from './components/TodoApp/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <hr />
        <FunctionalComponent name='NAME as props' description='SHORT DESCRIPTION:'>
          {/* <p>
            Children of Functional Component
          </p> */}
        </FunctionalComponent>
        <hr />
        <FunctionalComponentClickEvent />
        <hr />
        {/* <FunctionalComponent name='user1' anothername='spiderman' />
        <hr />
        <FunctionalComponent name='user2' anothername='wonderwomen' />
        <hr /> */}
        <ClassComponent name='USER as props' />
        <hr />
        <ClassComponentClickEvent />
        <hr />
        {/* <ClassComponent name='user1' />
        <hr />
        <ClassComponent name='user2' />
        <hr /> */}
        <Jsx />
        <hr />
        <ConditionalRendering name='Conditional Rendering' />
        <hr />
        <ParentComponent />
        <hr />
        <EventBind name='Event Binding' />
        <hr />
        <StateObject />
        <hr />
        <Counter />
        <hr />
        <ListRendering />
        <hr />
        <Stylesheet primary={false} />
        <hr />
        <Form />
        <hr />
      </div>
    );
  }
}

export default App;
