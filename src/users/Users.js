import React, { Component } from 'react'
import UserForm from '../users/userform/UserForm'
import UserList from '../users/userList/UserList'
import axios from 'axios'
import WithLoading from '../HOC/withLoading/WithLoading'
import { v4 as uuidv4 } from 'uuid';
const UsersWithLoading = WithLoading(UserList)

export default class Users extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            userList : [] , 
            isLoading : true ,
            userForm : {}
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
        .then(data => {
            console.log(data)
            const newState = {...this.state} 
            newState.isLoading= false ;
            newState.userList = data 
            this.setState(newState)
        })
    }
    //delet user
    deleteUserHandler = (id) => {
        console.log(`delete : userid(${id})`)
    }
    //edit user
    editUserHandler = (id) => {
        console.log(`edit : userid(${id})`) ;

        const findUser = this.state.userList.find((user)=> user.id === id )
        console.log(`finduser : ${findUser}`)
        this.setState({...this.state , userForm: findUser })

  
    }
    //updateUserListHandler 
    updateUserListHandler = (newUser) => {
        const newState = {...this.state}
        const index = this.state.userList.findIndex(user =>{
            return user.id === newUser.id })
        if (index === -1) {
            //forAddUsr
            newState.userList.push(newUser)
        }else{
            //update
            newState.userList[index] = newUser
        }
        newState.isLoading = true
        this.setState(newState) ;   
        setTimeout(()=>{
            newState.isLoading = false
            this.setState(newState) ;   
        },700)

    }
    addUser = () => {
        const newUser ={
            id: uuidv4(),
            name : '' ,
            username : '' ,
            email : ''
            }
        
        this.setState({...this.state ,userForm: newUser})
    }
    //render
    render() {
        return (
            <div className='mt-5'>
                <UserForm updateUser={this.updateUserListHandler}
                userInfo = {this.state.userForm}
                />

                <button 
                data-bs-toggle='collapse'
                data-bs-target='#user-form'
                className='btn btn-outline-primary ms-4' 
                onClick={this.addUser}>
                    Add New User
                </button>
                <UsersWithLoading isLoading={this.state.isLoading} 
                    userList={this.state.userList} 
                    editUser={this.editUserHandler}
                    deleteUser={this.deleteUserHandler}
                />
            </div>
        )
    }
}
