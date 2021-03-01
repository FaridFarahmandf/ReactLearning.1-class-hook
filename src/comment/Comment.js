import React from 'react'
import { useDispatch } from 'react-redux'
import {useLocation , Link} from 'react-router-dom'
import {Delete_Comments} from '../redux/Action'


export default function Comment(props) {
    const location = useLocation()
    const dispatch = useDispatch()
    const deleteCommentHandler = (id) => {
        dispatch(Delete_Comments(id))
    }
    return (
        <div className='w-25 p-4'>
            <div className='card shadow-sm h-100'>
              <div className='card-body'>
                <h3 className='card-title text-center'>{props.name}</h3>
                <div>
                  <span>post ID :</span>
                  <span className='fw-bold'>{props.postId}</span>
                </div>
                <div>
                  <span>ID :</span>
                  <span className='fw-bold'>{props.id}</span>
                </div>
                <div>
                  <span>Email :</span>
                  <span className='fw-bold'>{props.email}</span>
                </div>
                <div>
                  <span>Body :</span>
                  <span className='fw-bold'>{props.body}</span>
                </div>
              </div>
              <div className='card-footer d-flex justify-content-end bg-white'>
                  <Link
                    className='btn btn-outline-primary me-2'
                    to={`${location.pathname}/${props.id}`}
                  >
                    <i className='bi bi-pencil'></i>
                  </Link>
                  <button className='btn btn-outline-danger' 
                      onClick={()=>deleteCommentHandler(props.id)}>
                    <i className='bi bi-trash'></i>
                  </button>
                </div>
            </div>
          </div>
     
      )
}
