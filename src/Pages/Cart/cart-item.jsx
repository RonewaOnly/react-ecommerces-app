import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
export const CartItem = (props) => {
    const {id,productName,price,productImages} = props.data
    const { cartItem, addToCart, removeFromCart,updateCartItemCount } = useContext(ShopContext)
  return (
    <div className='cartItem'>
        <img src={productImages}/>
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input type="number" onChange={e => updateCartItemCount(Number(e.target.value),id)} value={cartItem[id]} readOnly />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
