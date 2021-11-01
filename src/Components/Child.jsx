
import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [1, 2, 3]
        }
        this.ddata=15
    }

    render() {
        return (
            <div>
                <h1>child</h1>
                <button onClick={() => { console.log(this.props.change(this.ddata)) }}>change state</button>
                <button onClick={() => { console.log(this) }}>change data</button>
                <button onClick={() => { this.props.delete(1) }}>delete item</button>
            </div>
        )
    }
}
