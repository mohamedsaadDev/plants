import React from 'react'
import "./BestsellersComponent.css"
import {Bestseller} from "./../../data/Bestsellers"
import hangingplanter from "../../imges/cat-leftbanner-270x380.jpg"
import Rating from "../Rating/Rating"
const BestsellersComponent = () => {
    return (
        <div className='Wrapper-Continer-Bestsellers'>
            <div className='Continer-Bestsellers'>
                <h4 className='title-Bestsellers'>BESTSELLERS</h4>
                {
                    Bestseller.map((item)=> 
                        <div key={item.id} className='Item-Bestsellers'>
                            <img className='img-Item-Bestsellers' src={item.img} alt="" />
                            <div className='Info-Item-Bestsellers'>
                                <span className='title-Item-Bestsellers'>{item.title}</span>
                                <span className='price-Item-Bestsellers'>$ {item.price}</span>
                                <Rating rating={item.rating}/>
                            </div>
                        </div>)
                }
            </div>
            <img className='Img-End-Bestsellers' src={hangingplanter} alt="" />
        </div>
    )   
}
export default BestsellersComponent