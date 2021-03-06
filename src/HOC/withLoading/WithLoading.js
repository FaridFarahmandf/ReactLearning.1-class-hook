// import React from 'react'
// import Loading from '../../loading/Loading'

// export default function WithLoading(Component) {
//     return function WithLoadingComponent({isLoading , ...props}) {
//         if(!isLoading){
//             return <Component {...props} />
//         }else {
//             return <Loading></Loading>
//         }
//     }
// }

import React from 'react'
import Loading from '../../loading/Loading'

export default function WithLoading(Component) {
    return function WithLoadingComponent({isLoading , ...props}) {
        if(!isLoading) {
           return <Component {...props} />
        }else {
           return <Loading />
        }
    }
}

