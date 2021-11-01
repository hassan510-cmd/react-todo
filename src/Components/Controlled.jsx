import React, { Component } from 'react'

export default class Controlled extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:''
        }
    }
    HandleInputs=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        },()=>{console.log(event.target.value)})
    }
    
    render() {
        return (
            <div>
                <div>
                    <h1>controlled inputs</h1>
                    <input onChange={this.HandleInputs} name='name' type="text" placeholder='name' value={this.state.name} />
                    <input type="text" placeholder='email' name='email' onChange={this.HandleInputs} value={this.state.email} />
                    <hr />
                </div>
            </div>
        )
    }
}
