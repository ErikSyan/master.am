import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} />     
        <p>{this.props.item.nkaragrutyun}</p>
        <b>{this.props.item.price}դրամից սկսած</b>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}></FaTrash>
      </div>
    )
  }
}

export default Order