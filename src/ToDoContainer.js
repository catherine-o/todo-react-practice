import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoContainer = (props) => {
    const todos = props.todos.map(todo => {
        return <ToDoItem todo={todo} />
    })

    return(
        <div>
            <h1>ToDo Container</h1>
            {todos}
        </div>
    )
}

export default ToDoContainer