import React from 'react'
import "./ContactUs.css"
import BestsellersComponent from '../../components/Bestsellers/Bestsellers'
import Form from './Form'
import Banner from '../../components/Banner/Banner'
const ContactUs = () => {
    return (
        <>
        <Banner title="Contact Us"/>    
        <div className='Wraaper-ContactUs'>
            <BestsellersComponent/>
            <div className='Wraaper-Content-ContactUs'>
                <div className='Container-OurLocation'>
                    <h5 className='Title-Top-OurLocation'>Our Location</h5>
                    <div className='Container-Info-OurLocation'>
                        <i  className="fa-solid fa-house-chimney Icon-OurLocation"></i>
                        <b className='Title-Item-Location'>Your Store</b>
                        <p className='paragrph-Item-Location'>71 Pennington Lane Vernon Rockville, CT 06066</p>
                        <button className='Btn-Map-Location'> <i class="fa-solid fa-location-dot"></i> VIEW GOOGLE MAP</button>
                        <hr className='Line-ContactUs' />
                        <i className="fa-solid fa-fax Icon-OurLocation"></i>
                        <b className='Title-Item-Location'>Fax</b>
                        <p className='paragrph-Item-Location'>11225553321</p>
                        <hr className='Line-ContactUs'/>
                        <i className="fa-solid fa-phone Icon-OurLocation"></i>
                        <b className='Title-Item-Location'>Telephone</b>
                        <p className='paragrph-Item-Location'>123-456-7890</p>
                        <hr className='Line-ContactUs' />
                        <i className="fa-regular fa-clock Icon-OurLocation"></i>
                        <b className='Title-Item-Location'>Opening Times</b>
                        <p className='paragrph-Item-Location'>11:00 AM To 7:00 PM</p>
                        <hr className='Line-ContactUs' />
                        <i className="fa-regular fa-comments Icon-OurLocation"></i>
                        <b className='Title-Item-Location'>Comments</b>
                        <p className='paragrph-Item-Location'>Demo Comment Description from Store Owners.</p>
                    </div>
                </div>
                <Form/>
            </div>
        </div>
        </>
    )
}   
export default ContactUs