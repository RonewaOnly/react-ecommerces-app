import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
export const Product = (props) => {
    const { id, productName, price, productImages }  = props.data

    const { addToCart,cartItem } = useContext(ShopContext)

    const cartItemAmount = cartItem[id]
  return (
    <div className='product'>
        <img src={productImages}/>
        <div className='description'>
            <p>
                <b>
                    {productName}
                </b>
            </p>

            <p>${price}</p>
        </div>
        <button className='addToCartBtn' 
        onClick={() => addToCart(id)}>
            Add to Cart  {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
    </div>
  )
}
