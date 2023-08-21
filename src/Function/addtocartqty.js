import { cartaction } from "../Redux/slice/cartSlice"
export const addtocartqty = (item, dispatch,quantityitem) =>{
    const apdetobject ={
        title:item.title,
        img:item.img,
        id:item.id,
        quantity:quantityitem,  
        price:item.price,
        EcoTax:item.EcoTax,
        percentEcoTax:item.percentEcoTax,
    }
    dispatch(cartaction.addtocart(apdetobject))
}