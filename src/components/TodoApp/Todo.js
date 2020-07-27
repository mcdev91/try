import React from 'react'

export default props => (
    <div style={{ display: 'flex', marginLeft: '100px' }}>
        <div style={{
            color: props.todo.completed ? 'green' : ''
        }} onClick={props.toggleComplete}>{props.todo.text}</div>
        <button onClick={props.deleteTodo}>Delete</button>
    </div>
);