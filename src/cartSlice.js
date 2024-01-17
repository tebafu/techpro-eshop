import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.products.find((product) => product._id === action.payload._id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },

        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product._id !== action.payload._id);
        },

        updateQuantity: (state, action) => {
            const product = state.products.find((product) => product._id === action.payload._id);
            if (product) {
                product.quantity = action.payload.quantity;
            }
        },

        clearCart: (state) => {
            state.products = [];
        },
    },
});

export const { addProduct, removeProduct, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
