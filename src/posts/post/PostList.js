import React , { useState } from 'react'
import post from '../post/Post'
import Post from '../post/Post'

export default function PostList(props) {

    return (
        <div className='container d-flex flex-wrap mt-4'>
            <h2 className='text-center display-4 w-100'>{props.title}</h2>
            {props.postList.map((post) => <Post {...post} />)}
        </div>
    )
}
