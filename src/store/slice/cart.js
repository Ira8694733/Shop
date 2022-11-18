import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basketItems: [],
    },
    reducers: {
        addToCart: (state, { payload }) => {
            let isInArray = false;

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

        inputOnChange: (state, { payload }) => {
            const id = payload.product.id
            const value  = Number(payload.value)
            state.basketItems?.forEach((el) => {
                if (el.id === id) {
                    el.quantity = value
                }
            });
        },
    },
});

export const { addToCart, deleteFromCart, buttonPlus, buttonMinus, inputOnChange} = basketSlice.actions;
export default basketSlice.reducer;