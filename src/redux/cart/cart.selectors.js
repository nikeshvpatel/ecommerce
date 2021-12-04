import {createSelector} from "reselect";

const selectCart = state => state.cart; // this is input selector

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);