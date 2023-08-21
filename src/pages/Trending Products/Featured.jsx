//import React,{useState} from 'react'
import {TrendingProducts} from "./../../data/data"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import Rating from "../../components/Rating/Rating"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "../Modal/Modal";
import {handlAddToCart} from "../../Function/handlAddToCart"
import {handledispatcwishlist}from "../../Function/handlAddWishlast"
const Featured = () => {
  const dispatch = useDispatch()
  const [openModeal,setopenModeal]=useState(false)
  const [prodactdata,setprodactdata]=useState(null)
  function hadeallproducts (item){
    setopenModeal(true)
    setprodactdata(item)
  }
    return (
    <div className='wraapar-slider-featured'>
      {openModeal&& <Modal setopenModeal ={setopenModeal} prodactdata={prodactdata}/>}
      <Swiper
      breakpoints={{
        // when window width is >= 640px
        350: {
        slidesPerView: 2,
        spaceBetween: 10,
        },
        480: {
        slidesPerView: 2,
        spaceBetween: 15,
        },
        640: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
        992: {
        slidesPerView: 4,
        spaceBetween: 30,
        },
}}
        freeMode={true}
        modules={[FreeMode]}  
        >
          <div>
          {
          TrendingProducts.map(item => 
            <SwiperSlide key={item.id} className='wraaper-Featured-img' >
              <div>
                <Link to={`/prodects/${item.id}`} ><img className='Featured-img' src={item.img} alt="" /></Link>
                <div className='info-item-Featured'>
                  <h4 className="title-prodect-Featured">{item.title}</h4>
                  <Rating rating={item.rating}/>
                  <span className="price-prodect-featured">$ {item.price}</span>
                </div>
                <div className="Container-Icon-Featured">
                  <i onClick={()=>handlAddToCart(item,dispatch)} className="fa-sharp fa-solid fa-cart-plus Icon-Featured"></i>
                  <i onClick={()=>handledispatcwishlist(item,dispatch)} className="fa-regular fa-heart Icon-Featured"></i>
                  <i onClick={()=> hadeallproducts(item)} className="fa-sharp fa-regular fa-eye Icon-Featured"></i>
                </div>
              </div>
            </SwiperSlide> 
          )
          }
        </div>
      </Swiper>
    </div>
  )
}
export default Featured