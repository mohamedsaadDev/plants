import React from 'react'
import ImgAboutUs  from "../../imges/ImgAboutUs.jpg"
import "./AboutUs.css"
import BestsellersComponent from '../../components/Bestsellers/Bestsellers'
import Banner from '../../components/Banner/Banner'
const AboutUs = () => {
    return (
        <>
        <Banner title="About Us"/>
        <div className='Wraaper-Container-AboutUs'>
            <BestsellersComponent/>
            <div className='Container-AboutUs'>
                <div className='Container-Info-AboutUs'>
                    <h6 className='Title-AbuotUs'>ABOUT US</h6>
                    <span className='Sub-Ttle-AboutUs'>Who We Are</span>
                    <p className='paragraph-AboutUs'>
                        We are a leading company sit amet, consectetur adipisicing elit. 
                        Minus obcaecati pariatur officiis molestias eveniet harum laudantium obcaecati pariatur officiis molestias eveniet harum laudantium sed optio iste.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt ut laoreet dolore magna aliquam erat.
                    </p>
                </div>
                <img className='Img-AboutUs' src={ImgAboutUs} alt="" />
            </div>
        </div>  
        </>
    )   
}
export default AboutUs