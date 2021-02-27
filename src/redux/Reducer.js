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
}

const rootReducer = (state = initState , action) => {
    
    switch(action.type) {
        case actionType.Add_Products: 
            return { products: [...state.products , action.value] }
        default : 
            return state
    }
}
export default rootReducer ;