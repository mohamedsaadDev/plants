import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../imges/logo.png"
import SearshNav from './SearshBox/SearshNav'
import MenuUser from './MenuUser/MenuUser'
import Modelcart from '../../pages/cart/Modlecart'
import {  useSelector } from 'react-redux'
const NavigationBar = () => {
const [cartmodle,setcartmodle]= useState(false)
const [shoserch, setshowserch]= useState(false)
const [menuuser, setmenuuser]= useState(false)
const [navmenu, setnavmenu]= useState(false)
const [OpenHomeDecor, setOpenHomeDecor]= useState(false)
const [OpenFern, setOpenFern]= useState(false)
const [OpenMore, setOpwnMore]= useState(false)
const {cartitems}=useSelector(state => state.cart)
return (
    <>
    <div className='Banner-backgruond-NavBar'></div>
        <div className="continer-nav"> 
            <div className='container-logo-navbar'>
                <Link to="/"><img className='logo-navbar' src={logo} alt="" /></Link>
            </div>
            <div className='Wrapper-Navigation'>
                    <ul  style={{ left:navmenu && "0"}}className='Navigation'>
                    <li className='Top-Menu-Navigation'><p className='Title-Menu-Navbar'>MENU</p> <i onClick={()=>setnavmenu(false)} className="fa-solid fa-x"></i></li>
                    <li><Link to="/" className='navbar-link-menu'>Home</Link></li>
                    <li className='menu'>
                        <div onClick={()=>setOpenHomeDecor(prev=>!prev)}>
                            <Link to="/prodects" className='navbar-link-menu'>Home Decor</Link>
                            {OpenHomeDecor?<i className="fa-solid fa-minus Icon-Minus-Plus-Navbar"></i>:<i className="fa-solid fa-plus Icon-Minus-Plus-Navbar"></i>}
                        </div>
                        <ul className={OpenHomeDecor?"Mobile-SubMenu":"SubMenu"}>
                            <li ><Link to="/prodects" className='navbar-link-menu'>Aloe Vera</Link></li>
                            <li ><Link to="/prodects" className='navbar-link-menu'>Peppermint</Link></li>
                            <li ><Link to="/prodects" className='navbar-link-menu'>Tulsi</Link></li>
                        </ul>
                    </li>
                    <li className='menu'>
                        <div onClick={()=>setOpenFern(prev=>!prev)}>
                            <Link to="/prodects" className='navbar-link-menu'>Fern</Link>
                            {OpenFern?<i className="fa-solid fa-minus Icon-Minus-Plus-Navbar"></i>:<i className="fa-solid fa-plus Icon-Minus-Plus-Navbar"></i>}
                        </div>
                        <ul className={OpenFern?"Mobile-SubMenu":"SubMenu"}>
                            <li ><Link to="/prodects" className='navbar-link-menu'>Crocodile Fern</Link></li>
                            <li ><Link to="/prodects" className='navbar-link-menu'>Maidenhair Fern</Link></li>
                            <li ><Link to="/prodects" className='navbar-link-menu'>Staghorn Fern</Link></li>
                            <li ><Link to="/prodects" className='navbar-link-menu'>Button Fern</Link></li>
                            <li ><Link to="/prodects" className='navbar-link-menu'>Boston Fern</Link></li>
                        </ul>
                    </li>
                    <li className='menu'>
                        <div onClick={()=>setOpwnMore(prev=>!prev)}>
                            <Link to="/prodects" className='navbar-link-menu'>More</Link>
                            {OpenMore?<i className="fa-solid fa-minus Icon-Minus-Plus-Navbar"></i>:<i className="fa-solid fa-plus Icon-Minus-Plus-Navbar"></i>}
                        </div>
                        <ul className={OpenMore?"Mobile-SubMenu":"SubMenu"}>
                            <li ><Link to="/prodects" className='navbar-link-menu'>Aloe Vera</Link></li>
                            <li ><Link to="/prodects" className='navbar-link-menu'>Peppermint</Link></li>
                            <li ><Link to="/prodects" className='navbar-link-menu'>Tulsi</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/Blog" className='navbar-link-menu'>Blog</Link></li>
                </ul>
                <ul className='wrapper-icon-navbar'>
                            <li><i onClick={()=>setnavmenu(prev => !prev)} className="fa-solid fa-bars Icon-NavMenu"></i></li>
                            <li><i onClick={()=>setshowserch(prev=> !prev)} className="fa-solid fa-magnifying-glass icon-navbar"></i></li>
                            <li><i onClick={()=>setmenuuser(prev => !prev)} className="fa-solid fa-user icon-navbar"></i></li>
                            <MenuUser menuuser={menuuser}/>
                            <li className='Parnt-Cart-Navbar'>
                                <i onClick={()=>setcartmodle(prev => !prev)}
                                className="fa-sharp fa-solid fa-cart-shopping icon-navbar"></i>
                                {cartitems.length ?  <span className='qty-Notification-Navbar'>{cartitems.length}</span>:""}
                            </li>
                            {cartmodle &&<Modelcart setcartmodle={setcartmodle}/>}
                </ul>
        </div>
    </div>
    <SearshNav 
    shoserch = {shoserch}
    setshowserch={setshowserch}
    />
</> 
)
}
export default NavigationBar