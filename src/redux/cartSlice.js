import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name: 'cartItem',
    initialState: {
        items:[],
        totlePrice :0,
        totalQuantity : 0,
        changed : false,
},
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            console.log(newItem);
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    img: newItem.img,
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            
        },
        removeItemFromCart(state, action) {
            const itemId = action.payload;
            const existingItem = state.items.find((item) => item.id === itemId);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== itemId);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
    
})

export const cartActions = cartSlice.actions

export default cartSlice