// const count = 0 ; 

// const rootReducer = (state = count , action) => {

//     switch(action.type) {
//         case 'INCREMENT' : 
//             return state + 1 
//         case 'DECREMENT' : 
//             return state - 1 
//         default :
//             return state ;
//     }
// }

import * as actionType from './ActionType'
const initState = {
    products: [
        {
          id: 1,
          name: 'Product 1',
          price: 1254,
        },
        {
          id: 2,
          name: 'Product 2',
          price: 45646,
        },
      ],
    comments : [] ,
}

const rootReducer = (state = initState , action) => {
    
    switch(action.type) {
        //addProduct
        case actionType.Add_Products: 
            return { products: [...state.products , action.value] }
        //deleteProduct 
        case actionType.Remove_Products : 
            let newArray = state.products.filter((p) => p.id !== action.value)
            console.log(newArray) ;
            return {
                ...state , products : newArray
            }
        case actionType.Load_All_Comments : 
            const newState = {...state}
            fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(ans => {
                console.log(ans)
                newState.comments = ans
            })
            return newState
        case actionType.Delete_Comments :
            let newArr = state.comments.filter(c => c.id !== action.id)
            console.log(newArr)
            return {...state , comments : newArr}
        default : 
            return state
    }
}
export default rootReducer ;