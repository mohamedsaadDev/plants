import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import img1 from "./../../data/Top Categories/TopCategories1.png"
import img2 from "./../../data/Top Categories/TopCategories2.png"
import img3 from "./../../data/Top Categories/TopCategories3.png"
import "./topcatrgories.css"
import 'swiper/css';
import 'swiper/css/free-mode';
const TopCategories = () => {
        return (
        <>
        <h1 className='title-Categories'>Top Categories</h1>
                <Swiper
                breakpoints={{
                        // when window width is >= 640px
                        350: {
                        slidesPerView: 2,
                        },
                        480: {
                        slidesPerView: 2,
                        },
                        640: {
                        slidesPerView: 3,
                        },
                        // when window width is >= 768px
                }}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper">
                <SwiperSlide className='SwiperSlide-TopCategories'><img className='imgslider-topcategories' src={img1} alt="" />
                <b className='title-item-topcategories'>Evergreen Plant</b>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide-TopCategories'><img className='imgslider-topcategories' src={img2} alt="" />
                <b className='title-item-topcategories'>Biennial Plants</b>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide-TopCategories'><img className='imgslider-topcategories' src={img3} alt="" />
                <b className='title-item-topcategories'>Aglaonema Plant</b>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide-TopCategories'><img className='imgslider-topcategories' src={img2} alt="" />
                <b className='title-item-topcategories'>YARROW</b>
                </SwiperSlide>
        </Swiper>
        </>
        )
}
export default TopCategories
