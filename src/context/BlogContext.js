// import React , {createContext , useContext, useReducer} from 'react'
// import rootReducer from './Reducer'

// const initState = {
//     albums : [
//         {
//             userId: 1,
//             id: 1,
//             title: 'quidem molestiae enim',
//           },
//           {
//             userId: 1,
//             id: 2,
//             title: 'sunt qui excepturi placeat culpa',
//           },
//     ] ,
// }

// export const BlogContext = createContext()

// const BlogContextProvider =  (props) => {
//     const [blogState , dispatch] = useReducer(rootReducer , initState) ;
//     return (
//         <BlogContextProvider value={{blogState , dispatch}}>
//             {props.children}
//         </BlogContextProvider>
//     )
// }

// export const useBlogContext = () => {useContext(BlogContext)}

// export default BlogContextProvider ;

import {createContext , useReducer , useContext} from 'react'
import rootReducer from './Reducer'

const initState = {
    albums : [
                 {
                    userId: 1,
                    id: 1,
                    title: "quidem molestiae enim"
                },
                {
                    userId: 1,
                    id: 2,
                    title: "sunt qui excepturi placeat culpa"
                 },
    ]
}

export const BlogContext = createContext() ;

const BlogContextProvider = (props) => {
    const [blogState , dispatch] = useReducer(rootReducer , initState) ;
    return (
        <BlogContext.Provider value={{blogState,dispatch}}>
            {props.children}
        </BlogContext.Provider>
    )
};

export  const useBlogContext = () => useContext(BlogContext) ;
export default BlogContextProvider ;