// import React, { Component } from 'react'

// export default class User extends Component {
//     render() {
//         return (
//             <div className='w-25 p-3'>
//                 <div className='card shadow-sm'>
//                     <div className='card-body'>
//                         <h3 className='card-title'>{this.props.name}</h3>
//                         <div>
//                             <span>ID :</span>
//                             <span className='fw-bold'>{this.props.id}</span>
//                         </div>
//                         <div>
//                             <span>Name :</span>
//                             <span className='fw-bold'>{this.props.name}</span>
//                         </div>
//                         <div>
//                             <span>User Name :</span>
//                             <span className='fw-bold'>{this.props.userName}</span>
//                         </div>
//                         <div>
//                             <span>Email Address :</span>
//                             <span className='fw-bold'>{this.props.email}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
                <div className='w-25 p-3'>
                    <div className='card shadow-sm'>
                        <div className='card-body'>
                            <h3 className='card-title'>id : {this.props.id}</h3>
                            <div>
                                <span>name : </span><span className='fw-bold'>{this.props.name}</span>
                            </div>
                            <div>
                                <span>username : </span><span className='fw-bold'>{this.props.username}</span>
                            </div>
                            <div>
                                <span>email : </span><span className='fw-bold'>{this.props.email}</span>
                            </div>
                        </div>
                    </div>
                </div> 
        )
    }
}

