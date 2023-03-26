import React, { createContext, useReducer, useContext } from 'react'
import { DummyData } from '../DataSets/DummyData';
import { cartReducer } from './Reducer';

const Cart = createContext();

const Context = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, {
            products: DummyData,
            cart: [],
    })

    // console.log(state)

  return (
    <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () => {
   return useContext(Cart);
}