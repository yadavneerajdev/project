
import React, { useContext, useState } from "react";

const cartContext = React.createContext({});

export function useCartContext() {
    return useContext(cartContext)
}

export const CartContextProvider=({children})=>{
    const [cartItems,setCartItem] = useState([])

    function getItemQuantity(id){
        return cartItems.find(item=>item.id===id)?.quantity || 0
    }

    function increaseCartQuantity(id){
        console.log(cartItems)
        setCartItem(currentItems=>{
            if(currentItems.find(item=>item.id===id) == null){
                return [...currentItems,{id, quantity:1}]
            }
            else{
                return currentItems.map(item=>{
                    if(item.id == id){
                        return {...item,quantity : item.quantity + 1}
                    }
                    else{
                        return item
                    }
                
                })
            }
        })
    }

    function removeFromCart(id){
        setCartItem(currentItems=>{
            return currentItems.filter(item=> item.id !==id)
        })
    }

    function decreaseCartQuantity(id){
        setCartItem(currentItems=>{
            if(currentItems.find(item=>item.id===id)?.quantity === 1){
                return currentItems.filter(item => item.id  !== id)
            }
            else{
                return currentItems.map(item=>{
                    if(item.id === id){
                        return {...item,quantity : item.quantity - 1}
                    }
                    else{
                        return item
                    }
                
                })
            }
        })
    }

    return <cartContext.Provider value={{ cartItems, getItemQuantity, increaseCartQuantity, removeFromCart, decreaseCartQuantity}}>
                {children}
            </cartContext.Provider>
}