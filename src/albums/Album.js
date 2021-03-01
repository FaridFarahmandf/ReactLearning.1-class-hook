import React, { useContext } from 'react'
import {useLocation , Link} from 'react-router-dom'
import { BlogContext, useBlogContext } from '../context/BlogContext';
import {Delete_Albums} from '../context/Action'


export default function Album(props) {
    const location = useLocation();
    // const {dispatch} = useContext(BlogContext)
    const {dispatch} = useBlogContext()
    const deleteAlbumHandler = (id) => {
        dispatch(Delete_Albums(id))
    }
    return (
        <div className='w-50 p-3'>
            <div className='card shadow-sm '>
              <div className='card-body'>
                <h3 className='card-title text-center'>{props.name}</h3>
                <div>
                  <span>user ID :</span>
                  <span className='fw-bold'>{props.userId}</span>
                </div>
                <div>
                  <span>ID :</span>
                  <span className='fw-bold'>{props.id}</span>
                </div>
                <div>
                  <span>Title :</span>
                  <span className='fw-bold'>{props.title}</span>
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
                      onClick={()=>deleteAlbumHandler(props.id)}>
                    <i className='bi bi-trash'></i>
                  </button>
                </div>
            </div>
          </div>
      )
}
