import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {increment} from '../redux/Action'
import Add_Products from '../redux/Action'

class Products extends Component {
  Add_Products = () => {
    console.log('hello')

    this.props.add({
      id: 3,
      name: 'Product 3',
      price: 4545646,
    })
  }
  render() {
    console.log('props in products : '+ this.props.products)
    return (
      <div>
        {/* <button className='btn btn-outline-success m-4' onClick={this.props.INCREMENT}>+</button>
        {this.props.counter}
        <button className='btn btn-outline-danger m-4' onClick={this.props.DECREMENT}>-</button> */}
        {this.props.products.map((product) => (
          <div>
            <div>
              <span>ID :</span> <span>{product.id}</span>
            </div>
            <div>
              <span>Name :</span> <span>{product.name}</span>
            </div>
            <div>
              <span>Price :</span> <span>{product.price}</span>
            </div>
            <button onClick={this.Add_Products}>Add</button>
            <button onClick={this.props.delete}>Delete</button>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapState to Props : ' + state)
  return {
    products: state.products ,
    // counter : state
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    // INCREMENT : () => {
    //   console.log(`increment clicked`)
    //   dispatch({type:'INCREMENT'})
    // },
    // DECREMENT : () => {
    //   console.log(`decrement clicked`)
    //   dispatch({type :'DECREMENT'})
    // }
    add: (value) => {
      dispatch(Add_Products(value)) 
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProp)(Products)