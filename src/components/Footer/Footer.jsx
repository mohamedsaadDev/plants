import React, {useState} from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import EndFooter from "../../imges/EndFooter.png"
const Footer = () => {
    const [OpenContactInfo, setOpenContactInfo]=useState(false)
    const [OpenInformation, setOpenInformation]=useState(false)
    const [OpenMyAccount, setOpenMyAccount]=useState(false)
    const [OpenExtras, setOpenExtras]=useState(false)
    const date = new Date()
    return (
        <div className='Container-Footer'>
            <div className="Container-Top-Footer">
                <h3 className='Ttle-Top-Footer'>Subscribe Newsletter</h3>
                <p className='Paragraph-Top-Footer'>
                    Subscribe to our newsletters now and stay up to date with new collections, 
                    the latest lookbooks and exclusive offers.
                </p>
                <form >
                    <div className='Wrapper-Contanier-Form-Foort'>
                        <div className='Contanier-Form-Foort'>
                            <input className='Input-Top-Footer' type="text" placeholder='Enter Address'/>
                            <button onClick={(e)=>e.preventDefault() } className='Btn-Top-Footer'>SUBSCRIBE</button>
                        </div>
                    </div>
                </form>
                <div className="Container-Icon-Footer">
                    <i className="fa-brands fa-facebook-f Icon-Top-Footer"></i>
                    <i className="fa-brands fa-twitter Icon-Top-Footer"></i>
                    <i className="fa-brands fa-google-plus-g Icon-Top-Footer"></i>
                    <i className="fa-brands fa-linkedin-in Icon-Top-Footer"></i>
                    <i className="fa-brands fa-pinterest-p Icon-Top-Footer"></i>
                    <i className="fa-brands fa-youtube Icon-Top-Footer"></i>
                </div>
            </div>
            <div className="continer-middle-Footer">
                <div className="Contact-Info-Footer">
                    <div onClick={()=>setOpenContactInfo(prev => !prev)} className='contaner-Arrow-Footer' >
                        <h5  className="Title-Middle-Footer">CONTACT INFO</h5>
                        {OpenContactInfo?<i className="fa-solid fa-arrow-up Arrow-Showdown-Footer"></i>:<i className="fa-solid fa-arrow-down Arrow-Showdown-Footer"></i>}
                    </div>
                    <ul className={OpenContactInfo?"Show-Container-Item-Footer":"hidden-Container-Item-Footer"}      >
                        <li className='Line-Foter'><i className="fa-solid fa-location-dot Icon-Middel-Footer"></i> 71 Pennington Lane Vernon<br /> Rockville, CT 06066</li>
                        <li className='Line-Foter'><i className="fa-solid fa-phone Icon-Middel-Footer"></i> +91 123 456 789</li>
                        <li className='Line-Foter'><i className="fa-solid fa-blender-phone Icon-Middel-Footer"></i> 0123-456-789</li>
                        <li className='Line-Foter'><i className="fa-solid fa-envelope Icon-Middel-Footer"></i> demo@Yourstore.com</li>
                    </ul>
                </div>
                <div className="Information-Footer">
                    <div onClick={()=>setOpenInformation(prev => !prev)} className='contaner-Arrow-Footer' >
                        <h5  className="Title-Middle-Footer">INFORMATION</h5>
                        {OpenInformation?<i className="fa-solid fa-arrow-up Arrow-Showdown-Footer"></i>:<i className="fa-solid fa-arrow-down Arrow-Showdown-Footer"></i>}
                    </div>
                    <ul className={OpenInformation?"Show-Container-Item-Footer":"hidden-Container-Item-Footer"}>
                        <li className='Line-Foter'><Link to="/AboutUs" className="Link-Footer" >About Us</Link></li>
                        <li className='Line-Foter'>Delivery Information</li>
                        <li className='Line-Foter'>Privacy Policy</li>
                        <li className='Line-Foter'>Terms & Conditions</li>
                        <li className='Line-Foter'><Link  to="/ContactUs" className="Link-Footer" >Contact Us</Link></li>
                    </ul>
                </div>
                <div className="MyAccount">
                    <div onClick={()=>setOpenMyAccount(prev => !prev)} className='contaner-Arrow-Footer'>
                        <h5 className="Title-Middle-Footer">MY ACCOUNT</h5>
                        {OpenMyAccount?<i className="fa-solid fa-arrow-up Arrow-Showdown-Footer"></i>:<i className="fa-solid fa-arrow-down Arrow-Showdown-Footer"></i>}
                    </div>
                    <ul className={OpenMyAccount?"Show-Container-Item-Footer":"hidden-Container-Item-Footer"}>
                        <li className='Line-Foter'>My Account</li>
                        <li className='Line-Foter'>Order History</li>
                        <li className='Line-Foter'><Link to="/WishList" className="Link-Footer" >Wish List</Link></li>
                        <li className='Line-Foter'>Newsletter</li>
                        <li className='Line-Foter'>Returns</li>
                    </ul>
                </div>
                <div className="Extras-Footer">
                    <div onClick={()=>setOpenExtras(prev => !prev)} className='contaner-Arrow-Footer'>
                        <h5 className="Title-Middle-Footer">EXTRAS</h5>
                        {OpenExtras?<i className="fa-solid fa-arrow-up Arrow-Showdown-Footer"></i>:<i className="fa-solid fa-arrow-down Arrow-Showdown-Footer"></i>}
                    </div>
                    <ul className={OpenExtras?"Show-Container-Item-Footer":"hidden-Container-Item-Footer"}>
                        <li className='Line-Foter'>Brands</li>
                        <li className='Line-Foter'>Gift Certificates</li>
                        <li className='Line-Foter'>Affiliate</li>
                        <li className='Line-Foter'>Specials</li>
                        <li className='Line-Foter'>Site Map</li>
                    </ul>
                </div>
            </div>
            <div className='End-Footer'>
                <p className='Text-End-Footer'>Powered By OpenCart Your Store © {date.getFullYear()}</p>
                <img src={EndFooter} alt="" />
            </div>
        </div>
    )
}
export default Footer