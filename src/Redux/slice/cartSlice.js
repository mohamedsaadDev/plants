import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cartitems:[],
    },
    reducers:{
        addtocart(state, action){
            const newItem = action.payload;
            const isExistcart = state.cartitems.find((cartitem) => cartitem.id === newItem.id);
            if(isExistcart) {
                state.cartitems = state.cartitems.map(item => item.id === newItem.id ? newItem : item);
            }else{
                state.cartitems = [...state.cartitems,newItem]
            }
        },
        removeitem(state, action){
            state.cartitems = state.cartitems.filter(item => item.id !== action.payload)
        }
    }
}
)
export const cartaction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
