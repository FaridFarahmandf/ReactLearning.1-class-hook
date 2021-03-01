import * as actionType from './ActionType'
const rootReucer = (state , action) => {
    switch(action.type) {
        case actionType.Load_All_Albums: 
            const newState = {...state} ;
            fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(ans => {
                 console.log(ans)
                 newState.albums = ans ;
            })
            return newState
        case actionType.Add_New_Albums :
            break
        case actionType.Edit_Album :
            break 
        case actionType.Delete_Album :
            return { ...state , albums : state.albums.filter((a) => a.id !== action.id)}
        default : 
            return state ;
    }
}

export default rootReucer