import React, { Component } from 'react'
import {
    BrowserRouter as Router ,
    Switch ,
    Route , 
    NavLink ,
    Link,
    Redirect,
    } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return ( 
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/'>MYFORM</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to='/home'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/users'>
                                        Users
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to='/posts' aria-disabled="true">
                                    Posts
                                </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/todos'>
                                        Todos
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/todos/subtodos'>
                                        SubTodos
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/products'>
                                        Products
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            
        )
    }
}
