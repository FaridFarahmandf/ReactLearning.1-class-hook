import axios from 'axios'
import React , { useState , useEffect } from 'react'
import PostForm from '../posts/post/PostForm'
import PostList from '../posts/post/PostList'

function Posts() {
    const [title , setTitle] = useState('my Title')
    const [postList , setPostList] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
            console.log(json) ;    
            setPostList(json)    
        })
        return () => {
           
        }
    },[])
    const addNewPostHandler = (post) => {
        setPostList([...postList , post])
    }
    return (
        <div>
            <PostForm addNewPost = {addNewPostHandler} />
            <PostList title={title} postList={postList} />
        </div>
    )
}
export default Posts
