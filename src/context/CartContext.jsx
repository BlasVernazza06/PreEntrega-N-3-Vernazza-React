import {createContext, useState } from 'react'

export const CartContext = createContext(); 

export const CartProvider = ({Children}) => {
     const[cart, setCart] = useState([])
  
     const addToCart = (item, quantity) => {
          if(isInCart(item.id)){
               setCart(
                    cart.map((prod) => {
                         if(prod.id === item.id){
                              return {...prod, cantidad: prod.cantidad + quantity}
                         } else {
                              return prod
                         }
                    })
               )
          } else{
               setCart([...cart, {...item, cantidad: quantity}])
          }     
     }

     const isInCart = (id) => {
          return cart.some((prod) => prod.id === id)
     }

     const clear = () => {
          setCart([])
     }

     const removeItem = (id) => {
          setCart(cart.filter((prod) => prod.id !== id))
     }
     return (
          <CartContext.Provider value={{cart, addToCart, clear, removeItem}}>
               {Children}
          </CartContext.Provider>
     )
}
