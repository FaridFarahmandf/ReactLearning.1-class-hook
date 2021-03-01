import React , {useEffect , useContext , useState} from 'react'
import { Loads_All_Albums } from '../context/Action'
import { useBlogContext } from '../context/BlogContext'
import WithLoading from '../HOC/withLoading/WithLoading'
import AlbumList from './AlbumList'
export default function Albums() {
    const AlbumsWithLoading = WithLoading(AlbumList)

    const [isloading , setIsLoading] = useState(true)

    const {dispatch} = useBlogContext()
    useEffect(() => {
        dispatch(Loads_All_Albums())
        setIsLoading(false)
        return () => {
            
        }
    }, [dispatch])
    return (
        <div>
            <AlbumsWithLoading isLoading={isloading} />
        </div>
    )
}
