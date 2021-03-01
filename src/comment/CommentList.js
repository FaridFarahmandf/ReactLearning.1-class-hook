import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import Comment from './Comment'

export default function CommentList() {
    const comment = useSelector(state => state.comments)
    return (
        <div className='d-flex flex-wrap'>
            {comment.map((comment) => <Comment key={comment.id} {...comment}/>)}
        </div>
    )
}
