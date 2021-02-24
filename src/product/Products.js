import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment} from '../redux/Action'

class Products extends Component {
  render() {
    return (
      <div>
        <button className='btn btn-outline-success m-4' onClick={this.props.INCREMENT}>+</button>
        {this.props.counter}
        <button className='btn btn-outline-danger m-4' onClick={this.props.DECREMENT}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapState to Props : ' + state)
  return {
    counter : state
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    INCREMENT : () => {
      console.log(`increment clicked`)
      dispatch({type:'INCREMENT'})
    },
    DECREMENT : () => {
      console.log(`decrement clicked`)
      dispatch({type :'DECREMENT'})
    }
    
  }
}

export default connect(mapStateToProps,mapDispatchToProp)(Products)