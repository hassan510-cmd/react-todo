import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                { "id": 1, "name": "task1", "description": "desc1", "state": 0 },
                { "id": 2, "name": "Veda Hayes", "description": "Eos eos voluptas id vel quibusdam odio aut ducimus, sunt fugit, irure magni sed mollitia doloremque .", "state": 0 },
                { "id": 3, "name": "Maryam Vincent", "description": "Dolorem rem in ea tempor molestiae irure molestiae dolores error consequat. Est est eiusmod a tempor.", "state": 0 },
                { "id": 4, "name": "Xanthus Bowers", "description": "Itaque accusantium consequatur dolore omnis amet, iste aliquid laborum. In ut dolore voluptatibus qu.", "state": 0 }
            ]
        }
    }

    EditParentData = (new_list) => {
        this.setState((prevState) => ({ data: [...prevState.data, new_list] })

        )
    }

    DeleteItem=(pk)=>{
        const {data}=this.state
        // console.log(data)
        for (var item of data){
            // console.log(item)
            if (item.id == pk){
                // console.log(data.indexOf(item))
                data.splice(data.indexOf(item),1)
                // console.log(data)
          
                this.setState({
                    data:[...data]
                })
            }
        }
    }

    render() {
        return (
            <div>
                <h1 onClick={this.DeleteItem}>Parent</h1>
                <Child change={this.EditParentData} delete={this.DeleteItem}/>
                {this.state.data.map((item, index) => (
                    <h1 key={index}>"{item.id}{item.name}{item.description}"</h1>
                ))}
            </div>
        )
    }
}
