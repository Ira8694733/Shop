import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basketItems: [],
    },
    reducers: {
        addToCart: (state, { payload }) => {
            let isInArray = false;

            // if the product is already exist in array
            state.basketItems?.forEach((el) => {
                if (el.id === payload.id) {
                    isInArray = true;
                    el.quantity++
                }
            });
            if (!isInArray) {
                state.basketItems.push({ ...payload, quantity: 1 });
            }
        },

        deleteFromCart: (state, { payload }) => {
            const {id} = payload;
            state.basketItems = state.basketItems.filter(item => item.id !== id);
        },

        buttonPlus: (state, { payload }) => {
            state.basketItems?.forEach((el) => {
                if (el.id === payload.id) {
                    el.quantity++
                }
            });
        },

        buttonMinus: (state, { payload }) => {
            state.basketItems?.forEach((el) => {
                if (el.id === payload.id) {
                    el.quantity--
                }
                if (el.quantity === 0){
                    state.basketItems = state.basketItems.filter(item => item.id !== payload.id);
                }
            });
        },

        //input change from Cart page
        inputOnChange: (state, { payload }) => {
            const id = payload.product.id
            const value  = Number(payload.value)
            state.basketItems?.forEach((el) => {
                if (el.id === id) {
                    el.quantity = value
                }
            });
        },

        // add to cart from Product page
        // productPageAdd:(state, { payload }) => {
        //     const id = payload.product.id
        //     const value  = Number(payload.value)
        //     let isInArray = false;
        //     state.basketItems?.forEach((el) => {
        //         if (el.id === payload.product.id) {
        //             isInArray = true;
        //             el.quantity = el.quantity + value
        //         }
        //     });
        //     if (!isInArray) {
        //         state.basketItems.push({ ...payload.product, quantity: value });
        //     }
        // },
    },
});

export const { addToCart, deleteFromCart, buttonPlus, buttonMinus, inputOnChange, productPageAdd } = basketSlice.actions;
export default basketSlice.reducer;