import React from 'react'

export default function Login() {
    return (
        <div>
            <div className="container">

                <div className="card shadow p-3 mt-3 bg-body rounded">
                    <b className="text-center">Build you profile</b>
                    <small className="text-center">Lorem ipsum dolor sit amet consectetur adipisicin.</small>
                    <div className="row align-items-start text-center bg-light mt-3">
                        <div className="col">
                            <button className="btn btn-success neon">About</button>
                        </div>
                        <div className="col align-self-center">
                            Account
                        </div>
                        <div className="col align-self-center">
                            Address
                        </div>
                    </div>
                    <h6 className="text-center mt-3 text-muted">Lorem elit. Quluptas cupiditate eveniet ex facilis nesciunt?</h6>
                    <div className='person-data mt-3'>
                        <div className=''>
                            <img style={{"width": "100px"}} className="me-5" src="./img/pngegg.png" alt=""/>
                        </div>
                        <div className="inputs">
                            <div className="d-flex">

                                <span className="input-group-text" id="basic-addon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-smile-upside-down" viewBox="0 0 16 16">
                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0z" />
                                        <path d="M4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5z" />
                                    </svg>
                                </span>
                                <input type="text" className="form-control" placeholder="fname" aria-label="Username"
                                    aria-describedby="basic-addon1"/>
                            </div>
                            <div className="d-flex">
                                <span className="input-group-text" id="basic-addon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>

                                </span>
                                <input type="text" className="form-control" placeholder="lname" aria-label="Username"
                                    aria-describedby="basic-addon1"/>
                            </div>
                        </div>

                    </div>

                    <div className="mt-3">

                        <div className="last2">
                            <span className="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                </svg>
                            </span>
                            <input type="text" className="form-control" placeholder="Email" aria-label="Username"
                                aria-describedby="basic-addon1"/>
                        </div>
                        <button className="btn btn-success mt-3 " style={{"float": "right", "width":"fit-content", "left":"-10px"}}> Next</button>
                    </div>
                </div>
            </div>
            <img className="myimg" src="./img/jungle-1807476_1280.jpg" alt=""/>
        </div>
    )
}
