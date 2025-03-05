import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import wishlistSlice from './slices/wishlistSlice';
const store = configureStore({

    reducer:{
        cart: cartReducer,
        wishlist:wishlistSlice
    }

});

export default store;