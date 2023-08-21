import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./MenuUser.css"
const MenuUser = ({menuuser}) => {
    const {wishlists}= useSelector(state => state.wishlist)
    return (
        <>
        { menuuser&&
        <li>
            <ul className='ui-user'>
                <li>
                    <ul>
                        <li className='Real-Link-Menuuser'><Link to="/Register">Register</Link></li>
                        <li className='Real-Link-Menuuser'><Link to="/Login">Login</Link></li>
                        <li className='Real-Link-Menuuser'><Link to="/wishlist" >Wishlist ({wishlists.length})</Link></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <span className='title-submenue'>Languuage</span>
                        <li className='Link-menuuser'>English</li>
                        <li className='Link-menuuser'>Arabic</li>
                    </ul>
                </li>
                <li>
                    <ul >
                        <span className='title-submenue'>Currency</span>
                        <li className='Link-menuuser'>€ Euro </li>
                        <li className='Link-menuuser'>£ Pound Sterling</li>
                        <li className='Link-menuuser'>$ US Dollar</li>
                    </ul> 
                </li>
                </ul>
                </li> }
        </>
    )
}
export default MenuUser