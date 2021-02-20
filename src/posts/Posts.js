import axios from 'axios'
import React , { useState , useEffect } from 'react'
import PostForm from '../posts/post/PostForm'
import PostList from '../posts/post/PostList'
import WidthLoading from '../HOC/withLoading/WithLoading'

function Posts() {
    const [title , setTitle] = useState('my Title')
    const [postList , setPostList] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    // const PostsWithLoading = WidthLoading(PostList) ;
    const PostsWithLoading = WidthLoading(PostList) ;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
            console.log(json) ;    
            setPostList(json) ;
            setIsLoading(false)   
        })
        return () => {
           
        }
    },[])
    const addNewPostHandler = (post) => {
        setIsLoading(true)
        setPostList([post , ...postList ])
        setTimeout(()=>{
            setIsLoading(false)
        },1000)
    }
    return (
        <div>
            <PostForm addNewPost = {addNewPostHandler} />
            {/* <PostsWithLoading isLoading={isLoading} title={title} postList={postList} /> */}
            <PostsWithLoading isLoading={isLoading} postList={postList} />
        </div>
    )
}
export default Posts
