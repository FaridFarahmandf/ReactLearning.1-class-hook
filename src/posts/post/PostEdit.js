// import React , {useEffect , useState}from 'react'
// import {useParams} from 'react-router-dom' 

// export default function PostEdit() {
//     let {id} = useParams() ;

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//         .then(res=>res.json())
//         .then(json => console.log(json))
//         return () => {
            
//         }
//     }, [id])

//     return (
//         <div>
//             post edit {id}
//         </div>
//     )
// }
import React ,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
export default function PostEdit() {
    let {id} = useParams()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => res.json())
        .then(json => console.log(json))
        return () => {
            
        }
    }, [id])
    return (
        <div>
            this post page for id: {id}
        </div>
    )
}
