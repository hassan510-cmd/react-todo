import React, { Component } from 'react'
import '../TodoStyle/bootstrap.min.css'
import Login from './Login'
import Register from './Register'
import TodoForm from './TodoForm'
import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'

export default class TodoParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             current_view:'todo'
        }
    }

    GoTodo=()=>{
        this.setState({
            current_view:'todo'
        })
    }

    GoLogin=()=>{
        this.setState({
            current_view:'login'
        })
    }
    
    GoReg=()=>{
        this.setState({
            current_view:'galary'
        })
    }
    
    render() {
        return (
            <div className='container'>
                <TodoHeader/>
                <button className='btn btn-primary' onClick={this.GoTodo}>Todo</button>
                <button className='btn btn-danger' onClick={this.GoLogin}>login</button>
                <button className='btn btn-warning' onClick={this.GoReg}>Galary</button>
                 {this.state.current_view =='login' ? <Login />: this.state.current_view =='todo' ?<TodoForm/>:this.state.current_view =='galary' ? <Register/>: console.log("object")}
                
                

            </div>
        )
    }
}
