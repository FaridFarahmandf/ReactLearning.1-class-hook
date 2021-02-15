import React , {useState} from 'react'

export default function post(props) {
    return (
        <div className='w-25 p-3'>
        <div className='card shadow-sm'>
            <div className='card-body'>
                <h3 className='card-title'>{props.title}</h3>
                <div>
                    <span>User ID :</span>
                    <span className='fw-bold'>{props.userid}</span>
                </div>
                <div>
                    <span>ID :</span>
                    <span className='fw-bold'>{props.id}</span>
                </div>
                <div>
                    <span>Body:</span>
                    <span className='fw-bold'>{props.body}</span>
                </div>
  
            </div>
        </div>
    </div>
    )
}
