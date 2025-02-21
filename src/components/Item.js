import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
        <h2>{this.props.item. tesak}</h2>
        <p>{this.props.item.nkaragrutyun}</p>
        <b>{this.props.item.price}դրամից սկսած</b>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}