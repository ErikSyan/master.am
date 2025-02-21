import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'


let showOrders = (props) => {
  let arjeq = 0
  props.orders.forEach(el => arjeq += Number.parseFloat(el.price));
  return (<div>
     {props.orders.map(el => (
    <Order onDelete = {props.onDelete} key={el.id} item={el}></Order>
  ))}
  {/* <p className='arjeq'> Արժեք {new Intl.NumberFormat().format(arjeq)}AMD</p> */}
  </div>
  )
}

let showNothing = () => {
  return (<div className='empty'>
    <h2>
    նախընտրած ապրանք չկա
    </h2>

  </div>)
}

export default function Header(props) {

  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'> Master.am </span>
            <ul className='nav'>
              <li>Ծառայություններ</li>
              <li>Մեր մասին</li>
              <li>Աշխատեք Master</li>
              
              
            </ul>
            <FaShoppingCart 
            onClick={() => setCartOpen(cartOpen = !cartOpen)}  
            className={`shop-cart-button ${cartOpen &&  'active'}`} />

            {cartOpen && (
              <div className='shop-cart'>
                
                
                {
                props.orders.length > 0 ?
                showOrders(props) : showNothing()
              }

              </div>
            )}

        </div>
        <div className='presentation'>

        </div>
    </header>
  )
}
