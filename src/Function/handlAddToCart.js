import { cartaction } from "../Redux/slice/cartSlice"
export const handlAddToCart = (item, dispatch) =>{
    const apdetobject ={
        title:item.title,
        img:item.img,
        id:item.id,
        quantity:item.quantity +1,  
        price:item.price,
        EcoTax:item.EcoTax,
        percentEcoTax: item.percentEcoTax,
    }
    dispatch(cartaction.addtocart(apdetobject))
}