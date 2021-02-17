// import React, { Component } from 'react'

// export default class UserForm extends Component {
//     constructor(props) {
//         super(props) ;
//         this.state = {
//             user:{
//                 id:'' , 
//                 name : '' ,
//                 userName : '' , 
//                 email :''
//             }
//         }
//     }
//     nameChangeHandler = (e) => {
//         console.log(e.target.value)

//         const newState = {...this.state}
//         newState.user.name = e.target.value

//         this.setState(newState)
//     }
//     idChangeHandler = (e) => {
//         console.log(e.target.value)

//         const newState = {...this.state}
//         newState.user.id = e.target.value

//         this.setState(newState)
//     }
//     userNameChangeHandler = (e) => {
//         console.log(e.target.value)
//         const newState = {...this.state}
//         newState.user.userName = e.target.value
//         this.setState(newState)
//     }
//     emailChangeHandler = (e) => {
//         console.log(e.target.value)
//         const newState = {...this.state}
//         newState.user.email = e.target.value
//         this.setState(newState)
//     }

//     saveUser = () => {
//         this.props.addNewUser(this.state.user)
//         this.setState({
//             user: {
//                 id:'' ,
//                 name: '',
//                 userName: '' ,
//                 email:'',
//             }
//         })
//     }
//     render() {
//         return (
//             <div className='card w-75 mx-auto mt-5'>
//                 <div className='card-body'>
//                     <div className='row'>
//                         <div className='col-md-6'>
//                             <div className='form-group'>
//                                 <label>ID :</label>
//                                 <input 
//                                     type='text' 
//                                     className='form-control'
//                                     onChange={this.idChangeHandler}
//                                     value={this.state.user.id}
//                                 />
//                             </div>
//                         </div>
//                         <div className='col-md-6'>
//                             <div className='form-group'>
//                                 <label>Name :</label>
//                                 <input 
//                                     type='text' 
//                                     className='form-control'
//                                     onChange={this.nameChangeHandler}
//                                     value={this.state.user.name}
//                                 />
//                             </div>
//                         </div>
//                         <div className='col-md-6'>
//                             <div className='form-group'>
//                                 <label>user name :</label>
//                                 <input 
//                                     type='text' 
//                                     className='form-control'
//                                     onChange={this.userNameChangeHandler}
//                                     value={this.state.user.userName}
//                                 />
//                             </div>
//                         </div>
//                         <div className='col-md-6'>
//                             <div className='form-group'>
//                                 <label>Email address :</label>
//                                 <input 
//                                     type='text' 
//                                     className='form-control'
//                                     onChange={this.emailChangeHandler}
//                                     value={this.state.user.email}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='card-footer'>
//                     <button className='btn btn-outline-success' onClick={this.saveUser}>
//                         Save
//                     </button>
//                 </div>
//             </div>
//         )
//     }

// }
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
    nameChangeHandler = (e) => {
        console.log(e.target.value);
        const newState = { ...this.state} 
        newState.user.name = e.target.value ; 
        this.setState(newState)
    }
    userNameChangeHandler = (e) => {
        console.log(e.target.value);
        const newState = { ...this.state} 
        newState.user.username = e.target.value ; 
        this.setState(newState)
    }
    emailChangeHandler = (e) => {
        console.log(e.target.value);
        const newState = { ...this.state} 
        newState.user.email = e.target.value ; 
        this.setState(newState)
    }

    saveUser = () => {
        this.props.saveNewUser(this.state.user)
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
            <div className='card w-75 mx-auto'>
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
                    <button className='btn btn-outline-success' onClick={this.saveUser}>SAVE</button>
                </div>
            </div>
        )
    }
}
