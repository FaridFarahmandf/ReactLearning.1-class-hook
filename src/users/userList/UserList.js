// import React, { Component } from 'react'
// import User from './User'

// export default class UserList extends Component {
//     render() {
//         return (
//             <div className='container d-flex flex-wrap mt-4'>
//                {this.props.userList.map((user) => <User {...user}/>)}
//             </div>
//         )
//     }
// }
import React, { Component } from 'react'
import User from '../userList/User'

export default class UserList extends Component {
    render() {
        return (
            <div className='container d-flex flex-wrap mt-4'>
                {this.props.userList.map((value) => <User key={value.id} {...value}/>)}
            </div>
        )
    }
}
