import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name: "cart", 
    initialState: {
        cartItems: [], 
    }, 
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id); 
            if(itemInCart) {
                itemInCart.qty++; 
            } else {
                state.cartItems.push({ ...action.payload, qty: 1 }); 
            }; 
        },
        incrementQty: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload); 
            item.qty++; 
        }, 
        decrementQty: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload); 
            if(item.qty === 1) {
                item.qty = 1; 
            } else {
                item.qty--; 
            }; 
        }, 
        removeItem: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload); 
            state.cartItems = removeItem; 
        }, 
        clearCart: (state) => {
            state.cartItems = []; 
        }, 
    }, 
}); 

export const { 
    addToCart, 
    incrementQty, 
    decrementQty, 
    removeItem, 
    clearCart, 
} = cartSlice.actions
export default cartSlice.reducer