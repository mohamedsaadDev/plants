import React from 'react'
import "./Testimonial.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import imgslider from "../../imges/imgsliderss.jpg"
const Banner = () => {
    return (
        
        <>
        <div>
            <div className="Background-Img-Testimonial">
                <div className='Continer-Toptext-Testimonial'>
                    <p className='Toptext-Testimonial'>New Decoration Plant For Home & Office</p>
                    <h3 className='Middletext-Testimonial'>Get Up To 70% Off!</h3>
                    <button className='Button-Testimonial'>SHOP NOW</button>
                </div>
            </div>
            <div className='Wraaper-Testimonial'>
                <Swiper className='Swiper-Testimonial'>
                    <SwiperSlide className='swiper-slide-Testimonial'>
                        <div className='Contianer-Item-Testimonial'>
                            <i className="fa-solid fa-quote-left Iconleft-Quote-Testimonial"></i>
                            <i className="fa-solid fa-quote-right Iconright-Quote-Testimonial"></i>
                            <h2 className='title-slider-testimonial'>Testimonial</h2>
                            <p className='paragraph-slider-testimonial'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur earum similique accusantium, 
                                quis quibusdam temporibus enim ullam accusamus hic veritatis beatae,
                                facilis cum cumque voluptas autem magnam,
                                fugiat voluptatum!</p>
                            <img className='Img-Slider-testimonial' src={imgslider} alt="" />
                            <p>mohamed</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-Testimonial'>
                        <i className="fa-solid fa-quote-left Iconleft-Quote-Testimonial"></i>
                        <i className="fa-solid fa-quote-right Iconright-Quote-Testimonial"></i>
                            <h2 className='title-slider-testimonial'>Testimonial</h2>
                            <p className='paragraph-slider-testimonial'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur earum similique accusantium, quis quibusdam temporibus enim ullam accusamus hic veritatis beatae, facilis cum cumque voluptas autem magnam, fugiat voluptatum!</p>
                            <img className='Img-Slider-testimonial' src={imgslider} alt="" />
                            <p>mohamed</p>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-Testimonial'>
                        <i className="fa-solid fa-quote-left Iconleft-Quote-Testimonial"></i>
                        <i className="fa-solid fa-quote-right Iconright-Quote-Testimonial"></i>
                            <h2 className='title-slider-testimonial'>Testimonial</h2>
                            <p className='paragraph-slider-testimonial'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur earum similique accusantium, quis quibusdam temporibus enim ullam accusamus hic veritatis beatae, facilis cum cumque voluptas autem magnam, fugiat voluptatum!</p>
                            <img className='Img-Slider-testimonial' src={imgslider} alt="" />
                            <p>mohamed</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </>
    )
}
export default Banner