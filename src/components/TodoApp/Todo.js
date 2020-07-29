import React from 'react'

export default props => (
    <div style={{ display: 'flex', marginLeft: '100px' }}>
        <div style={{
            textDecoration: props.todo.completed ? 'line-through' : ''
        }} onClick={props.toggleComplete}>{props.todo.text}</div>
        <button onClick={props.deleteTodo}>Delete</button>
    </div>
);