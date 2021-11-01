import React, { Component } from 'react'
import '../TodoStyle/bootstrap.min.css'

export default class TodoHeader extends Component {
    render() {
        return (
            <div className='mb-3'>
                <nav className="navbar navbar-dark bg-dark">
                    
                    <div className="container-fluid">
                        <h3 className='font-italic text-white text-monospace'>Yesterday you said tomorrow. Just do it.</h3>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
}
