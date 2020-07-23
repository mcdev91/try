import React from 'react'

export default props => (
    <div style={{
        textDecoration: props.todo.completed ? 'line-through' : ''
    }} onClick={props.toggleComplete}>{props.todo.text}</div>
);