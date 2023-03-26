export const cartReducer = (state,action) => {
    switch (action.type) {

        case "ADD_TO_CART":
                return {...state,cart:[state.cart,{...action.payload, qty: state.cart.qty + 1}]}
            
        case "REMOVE_FROM_CART":
            return {...state,cart:[state.cart.filter(e => e.uniq_id !== action.payload.uniq_id)]}

        default: 
            return state;
    }
}