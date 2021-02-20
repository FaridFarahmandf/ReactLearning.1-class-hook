import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
                <div className='w-25 p-3'>
                    <div className='card shadow-sm h-100'>
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
                        <div className='card-footer d-flex justify-content-end'>
                            <button 
                                data-bs-toggle='collapse'
                                data-bs-target='#user-form'
                                className='btn btn-outline-primary'
                                onClick={()=>this.props.editUser(this.props.id)} >                           
                                    <i className="bi bi-pencil"></i>
                            </button>
                            <button 
                                data-bs-toggle='collapse'
                                data-bs-target='#user-form'                         
                                className='btn btn-outline-danger ms-2'
                                onClick={() => {this.props.deleteUser(this.props.id)}} >
                                    <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                </div> 
        )
    }
}

