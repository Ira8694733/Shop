import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./slice/products";
import {productsApi} from "./api/products";
import basketReducer from './slice/cart'

export default configureStore({
    reducer: {
        products:productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        basket: basketReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});


