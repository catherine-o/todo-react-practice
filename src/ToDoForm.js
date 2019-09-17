import React, {Component} from 'react'

class ToDoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '', 
            text: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            title: '',
            text: ''
        })
    }

    render () {
        return(
            <div>
                <h1>ToDo Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className='title-input' 
                        name='title' 
                        value={this.state.title} 
                        placeholder='Enter todo title' 
                        onChange={this.handleChange}/>
                    <input 
                        className='text-input'
                        name='text' 
                        value={this.state.text} 
                        placeholder='Enter todo text' 
                        onChange={this.handleChange}/>
                    <button>Save ToDo!</button>
                </form>
            </div>
        )
    }
}

export default ToDoForm