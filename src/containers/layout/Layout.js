import React, { Component } from 'react'
import Nav from '../../nav/Nav'
import Home from '../../home/Home'
import Users from '../../users/Users'
import Posts from '../../posts/Posts'
import Todos from '../../todos/Todos'
import SubTodos from '../../todos/SubTodos'
import {BrowserRouter , 
        Switch ,
        Link ,
        NavLink ,
        Route} from 'react-router-dom'

export default class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav />     
                    <Switch>
                        <Route path='/home'   component={Home} />
                        <Route path='/users' component={Users} />
                        <Route path='/posts' component={Posts} />
                        <Route path='/todos' component={Todos} />
                        {/* <Route path='/todos/subtodos' component={SubTodos} /> */}
                    </Switch>
            </BrowserRouter>
        )
    }
}
