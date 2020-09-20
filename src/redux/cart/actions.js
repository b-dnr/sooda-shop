import { ADD_ITEM_TO_CART, REMOVE_ITEM_TO_CART, CLEAR_CART } from "./constants";

export const addItemToCart = (item) => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})

export const removeItemFromCart = (id) => ({
    type: REMOVE_ITEM_TO_CART,
    payload: id

})

export const clearCart = () => ({
    type: CLEAR_CART
})
