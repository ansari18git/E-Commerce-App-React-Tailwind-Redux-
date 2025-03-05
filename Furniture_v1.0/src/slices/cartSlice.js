import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        totalAmount:0
    },
    reducers:{
        addToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(existingItem){
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;
            }
            else{
                state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    image:newItem.images[0],
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                });
            }
            state.totalQuantity +=1;
            state.totalAmount += newItem.price;
        },
        removeFromCart(state,action){
            const id  = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem){
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= existingItem.totalPrice;
                state.items = state.items.filter(item => item.id  != id);
            }

        },
        clearCart(state){
            state.items = [];
            state.totalAmount =0;
            state.totalQuantity =0;
        },
        updateCart(state,action){
            const {id,quantity} = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem){
                const priceDiff = existingItem.price * (quantity - existingItem.quantity);
                state.totalAmount +=priceDiff;
                state.totalQuantity += (quantity - existingItem.quantity);
                existingItem.quantity = quantity;
                existingItem.totalPrice = existingItem.price * quantity;
               
            }
        }
    }
});

export const {addToCart,removeFromCart,clearCart,updateCart} = cartSlice.actions;

export default cartSlice.reducer;