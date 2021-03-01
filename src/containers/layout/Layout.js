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
import PostEdit from '../../posts/post/PostEdit'
import Products from '../../product/Products'
import Comments from '../../comment/Comments'

export default class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav />     
                    <Switch>
                        <Route path='/home'   component={Home} />
                        <Route path='/users' component={Users} />
                        <Route path='/posts' exact component={Posts} />
                        <Route path='/posts/:id'  component={PostEdit} />
                        <Route path='/todos' component={Todos} />
                        <Route path='/products' component={Products} />
                        <Route path='/comments' component={Comments} />
                        {/* <Route path='/todos/subtodos' component={SubTodos} /> */}
                    </Switch>
            </BrowserRouter>
        )
    }
}
