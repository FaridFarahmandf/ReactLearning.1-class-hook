import React , {useEffect , useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import WithLoading from '../HOC/withLoading/WithLoading'
import {Load_ALL_Comments} from '../redux/Action'
import CommentList from './CommentList'

export default function Comments() {

    const dispatch = useDispatch()
    const [isLoading , setIsLoading] = useState(true) ;

    const CommentWithLoading = WithLoading(CommentList)

    useEffect(() => {
        dispatch(Load_ALL_Comments())
        setIsLoading(false);
        return () => {
            
        }
    }, [])
    return (
        <div>
            <CommentWithLoading isLoading = {isLoading} />
        </div>
    )
}
