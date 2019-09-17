import React from 'react'

const ToDoItem = (props) => {
    
    return (
        <div>
            <h1>{props.todo.title}</h1>
            <h2>{props.todo.text}</h2>
        </div>
    )
}

export default ToDoItem