import React, { Component } from 'react'

export default class Notcontrolled extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:''
        }
    }
    SubmitForm=(e)=>{
        e.preventDefault()
        this.setState({
            name:e.target.name.value,
            email:e.target.email.value,
        },()=>{const {name,email}=this.state;console.log(name,email)})
       
    }
    render() {
        return (
            <div>
                <h1>Uncontroled Inputs</h1>
                <div>
                    
                    <form onSubmit={this.SubmitForm}>
                        <input  name='name' type="text" placeholder='name'  />
                        
                        <input type="text" placeholder='email' name='email'   />
                        <button type="submit">submit</button>
                    </form>
                    <hr />
                </div>
            </div>
        )
    }
}
