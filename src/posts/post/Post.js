import React  from 'react'
import {Link , useHistory, useLocation} from 'react-router-dom'
export default function Post(props) {
    let location = useLocation()
    let history = useHistory()

    function historyHandler() {
        history.push('/users')
    }

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
            <div className='card-footer d-flex justify-content-end'>
                <Link className='btn btn-outline-dark' to={`${location.pathname}/${props.id}`}>
                    <i className='bi bi-pencil'></i>
                </Link>
                <button className='btn btn-outline-info' onClick={historyHandler}>history</button>
            </div>
            

        </div>
    </div>
    )
}
