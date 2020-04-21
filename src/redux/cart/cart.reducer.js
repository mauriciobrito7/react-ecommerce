import CartActionTypes from "./cart.types";
import { addCartItem, removeCartItem, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: false,
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, action.payload),
            };
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload),
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;