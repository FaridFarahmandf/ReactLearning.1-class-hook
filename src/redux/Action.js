import * as actionType from './ActionType'
import {connect} from 'react-redux'
import Products from '../product/Products'

const Add_Products = (value) => {
  return {  
      type : actionType.Add_Products , 
      value : value ,
    }
}
export default Add_Products

export const Remove_Products = () => {
  return {
    type : actionType.Remove_Products , 
    value : 3 ,
  }
}

