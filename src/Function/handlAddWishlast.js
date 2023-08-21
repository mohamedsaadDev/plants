import { wishlistaction } from "../Redux/slice/wishlistSlice"
export const handledispatcwishlist = (item ,dispatch)=>{
    const apdetobject ={
        title:item.title,
        img:item.img,
        id:item.id,
        quantity:item.quantity +1,  
        price:item.price,
    }
    dispatch(wishlistaction.addtowishlist(apdetobject))
}