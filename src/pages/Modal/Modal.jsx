import React, { useState } from 'react'
import "./Modal.css"
import Rating from "../../components/Rating/Rating"
import { useDispatch} from "react-redux";
import {addtocartqty} from "../../Function/addtocartqty"
import {handledispatcwishlist}from "../../Function/handlAddWishlast"
const Modal = ({setopenModeal,prodactdata}) => {
    const [qty,setqty]=useState(1)
    const dispatch = useDispatch()
    return (
    <>
        <div onClick={()=>setopenModeal(false)} className='Wraaper-Container-Modle'>
            <div onClick={(e)=>e.stopPropagation()} className='Container-Modle'>
                <i onClick={()=>setopenModeal(false)} className="fa-solid fa-x Icon-Close-Modal"></i>
                <div className='Container-Img-Modal'>
                    <img className='Img-Modal' src={prodactdata.img} alt="" />
                </div>
                <div className='Container-Info-Modal'>
                    <h5 className='title-item-Modal'>{prodactdata.title}</h5>
                    <Rating rating={prodactdata.rating}/>
                    <span className='Reviews-Item-Modal'>{prodactdata.reviews} reviews</span>
                    <hr />  
                    <ul className='List-Modal' >
                        <li className='Sub-List-Modal'>
                            <span>Brand:</span>
                            <span>Product Code:</span>
                            <span>Availability:</span>
                            <span>Price:</span>
                        </li>
                        <li className='Sub-List-Modal'>
                            <span >{prodactdata.Brand}</span>
                            <span >{prodactdata.ProductCode}</span>
                            <span >{prodactdata.Availability}</span>
                            <span >$ {prodactdata.price}</span>
                        </li>
                    </ul>
                    <hr />
                    <b className='Qty-title-Modal'>Qty</b>
                    <div className='Container-Btn-Modal'>
                        <div className='Wrapper-Btn-Modal'>
                            <button onClick={()=>setqty(qty+1)} className='Positive-Btn-Modal'>+</button>
                            <b className='Show-Qty-Modal'>{qty}</b>
                            <button disabled={qty <= 1} onClick={()=>setqty(qty-1)} className='Negative-Btn-Modal'>-</button>
                        </div>
                        <button onClick={()=>addtocartqty(prodactdata,dispatch,qty)} className='Btn-AddToCart-Modal'>Add To Cart</button>
                        </div>
                    <div onClick={()=>handledispatcwishlist(prodactdata,dispatch)} className='Wrapper-Icon-AddWishlist-Modal'>
                        <i title='Add To Wishlast' className="fa-regular fa-heart Icon-AddWishlist-Modal"></i>
                        <p className='title-addtowishlast-modal'>Add To Wishlast</p>
                    </div>
                </div>
            </div>
        </div>
    
    </>
    )
}
export default Modal