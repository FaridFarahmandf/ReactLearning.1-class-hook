// import React, { Component } from 'react'
// import UserList from './userList/UserList'
// import UserForm from './userform/UserForm'

// export default class Users extends Component {
//     constructor(props) {
//         super(props) ;
//         this.state = {
//             userList: [
//                 {
//                     id: '1',
//                     name: 'Leanne Graham',
//                     username: 'Bret',
//                     email: 'incere@april.biz',
//                 },
//                 {
//                     id: '2',
//                     name: 'Ervin Howell',
//                     username: 'Antonette',
//                     email: 'hanna@melissa.tv',
//                 },
//             ],
//         };
//     }
//     addNewUserHandler = (newUser) => {
//         console.log(newUser);
//         const newState = { ...this.state };
    
//         let index = newState.userList.findIndex((user)=>{
//           return user.id === newUser.id
//         })
//         console.log(index)
//         if(index === -1)
//           {newState.userList.push(newUser);
//             this.setState(newState);
//           }
//         else
//           alert('sdsds')
//       };
//     render() {
//         return (
//             <div className='mt-5'>
//                 <UserForm addNewUser={this.addNewUserHandler}/>
//                 <UserList userList={this.state.userList}/>
//             </div>
//         )
//     }

// }
import React, { Component } from 'react'
import UserForm from '../users/userform/UserForm'
import UserList from '../users/userList/UserList'
import axios from 'axios'

export default class Users extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            userList : []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
        .then(data => {
            console.log(data)
            const newState = {...this.state} 
            newState.userList = data 
            this.setState(newState)
        })
    }
    saveNewUserList = (newUser) => {
        const newState = {...this.state}

        newState.userList.push(newUser)
        this.setState(newState) ;

    }
    render() {
        return (
            <div className='mt-5'>
                <UserForm saveNewUser={this.saveNewUserList}/>
                <UserList userList={this.state.userList} />
            </div>
        )
    }
}
