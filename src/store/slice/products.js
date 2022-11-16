import {createSlice} from "@reduxjs/toolkit";
import {productsApi} from "../api/products";

const initialState = {
    products: []
};

// productsApi.endpoints.getAllProducts = undefined;

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // addProduct: (state, {payload}) => {
        //     state.products.push(payload);
        // },
        // addProducts: (state, {payload}) => {
        //     state.products = payload;
        // }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            productsApi.endpoints.getAllProducts.matchFulfilled,
            (state, {payload}) => {
                state.products = payload;
            }
        );
    }
});

export const {addProduct, addProducts} = productsSlice.actions;

export default productsSlice.reducer;
