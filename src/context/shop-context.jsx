import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {}
    for (let i =1; i < PRODUCTS.length +1; i++){
        cart[i] =0
    }
    return cart;
};

export const ShopContextProdvider = (props) => {
   const [cartItem,setCartItems] = useState(getDefaultCart);
   const getTotalCartAmount = () =>{
    let totalAmount =0;
    for(const item in cartItem){
      if(cartItem[item] > 0){
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalAmount += cartItem[item] * itemInfo.price
      
      }
    }
    return totalAmount
   }
   const addToCart =(itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId]+1}))
   }

   const removeFromCart =(itemId) =>{
    setCartItems((prev) => ({...prev,[itemId]: prev[itemId]-1}))

  }
  const updateCartItemCount = (newAmount,itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}))
  }
  const contextValue ={cartItem,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount}
  //console.log(cartItem)
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
