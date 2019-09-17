import React, { Component } from 'react';
import './App.css';
import ToDoForm from './ToDoForm'
import ToDoContainer from './ToDoContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  addTodo = (todo) => {
    const newTodo = {id: Date.now(), ...todo}
    this.setState({
      todos: [newTodo, ...this.state.todos]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <ToDoForm addTodo={this.addTodo} />
        <ToDoContainer todos={this.state.todos} />
      </div>
    )
  }

  
}

export default App;
