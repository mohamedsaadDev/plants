import { createSlice } from "@reduxjs/toolkit";
export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState:{
        wishlists:[],
    },
    reducers:{
        addtowishlist(state, action){
            const newItem = action.payload;
            const isExistcart = state.wishlists.find((itemWishlist) => itemWishlist.id === newItem.id);
            if(isExistcart) {
                state.wishlists = state.wishlists.map(item => item.id === newItem.id ? newItem : item);
            }else{
                state.wishlists = [...state.wishlists,newItem]
            }
        },
        removeitem(state, action){
            state.wishlists = state.wishlists.filter(item => item.id !== action.payload)
        }
    }
}
)
export const wishlistaction = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
