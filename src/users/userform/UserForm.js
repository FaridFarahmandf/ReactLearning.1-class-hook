import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class UserForm extends Component {
    constructor(props) {
        super(props) ; 
        this.state = {
            user:{
                id : uuidv4() ,
                name:'',
                username : '' ,
                email : ''
            }
        };
    }
    //componentDidUpdate
    componentDidUpdate(prevProps , prevState) {
            // console.log(`prevProps : ${prevProps}`)
            // console.log(`Props : ${this.props}`)

            if(this.props.userInfo !== prevProps.userInfo){
                this.setState({...this.state , user: this.props.userInfo})
            }
    }
    nameChangeHandler = (e) => {
        // console.log(e.target.value);
        const newState = { ...this.state} 
        newState.user.name = e.target.value ; 
        this.setState(newState)
    }
    userNameChangeHandler = (e) => {
        // console.log(e.target.value);
        const newState = { ...this.state} 
        newState.user.username = e.target.value ; 
        this.setState(newState)
    }
    emailChangeHandler = (e) => {
        // console.log(e.target.value);
        const newState = { ...this.state} 
        newState.user.email = e.target.value ; 
        this.setState(newState)
    }

    saveUser = () => {
        this.props.updateUser(this.state.user)
        this.setState({
            user:{
            id : uuidv4() ,
            name : '' ,
            username : '' ,
            email : ''
            }
        })
    }
    render() {
        return (
            <div className='card w-75 mx-auto collapse' id='user-form'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Id :</label>
                                <input
                                    value={this.state.user.id}
                                    className='form-control'
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Name :</label>
                                <input
                                    value={this.state.user.name}
                                    className='form-control'
                                    onChange={this.nameChangeHandler}                       
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>User Name :</label>
                                <input
                                    value={this.state.user.username}
                                    className='form-control'
                                    onChange={this.userNameChangeHandler}
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Email :</label>
                                <input
                                    value={this.state.user.email}
                                    className='form-control'
                                    onChange={this.emailChangeHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button 
                    data-bs-toggle='collapse'
                    data-bs-target='#user-form' 
                    className='btn btn-outline-success'
                    onClick={this.saveUser}
                    >
                        SAVE
                    </button>
                </div>
            </div>
        )
    }
}
