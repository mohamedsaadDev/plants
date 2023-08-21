import "./Home.css"
import imgslider1 from "../../imges/slider1.jpg"
import imgslider2 from "../../imges/slider2.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TopCategories from "../TopCategories/TopCategories";
import NavgationTrending from "../Trending Products/NavgationTrending"
import Banner from "../Testimonial/Testimonial";
import LatestBlog from "../LatestBlog/LatestBlog";
const Home = () => {
  return (
    <>
      <div className="continer-slider-home">
        <Swiper className="mySwiper">
            <SwiperSlide><img src={imgslider1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={imgslider2} alt="" /></SwiperSlide>
        </Swiper>
      </div>
      <div className="continer-srvises-home">
        <section className="serves-card-home">
          <i className="fa-solid fa-plane-up icon-srvises-home"></i>
          <div>
            <h4 className="title-servise-home">Free Worldwide Shipping</h4>
            <p className="description-servise-home"> On order over $150</p>
          </div>
        </section>
        <section className="serves-card-home">
          <i className="fa-sharp fa-solid fa-money-bill icon-srvises-home"></i>
          <div>
            <h4 className="title-servise-home">Money Back Guarantee</h4>
            <p className="description-servise-home">Cash On Delivery</p>
          </div>
        </section>
        <section className="serves-card-home">
        <i className="fa-solid fa-user icon-srvises-home"></i>
        <div>
          <h4 className="title-servise-home">Best Online Support</h4>
          <p className="description-servise-home">Call us 24/7 at 123-456-789</p>
        </div>
        </section>
      </div>
        <TopCategories/>  
        <NavgationTrending/>
        <Banner/>
        <LatestBlog/>
    </>
  )
}
export default Home
