import React from 'react'
import "./NavgationTrending.css"
import { Link, Outlet} from 'react-router-dom'

const NavgationTrending = () => {
return (
    <>
    <div className='wraaper-continer-NavgationTrending'>
    <h1 className='title-Categories '>Trending Products</h1>
        <ul className='continer-NavgationTrending'>
            <li><Link className='Link-NavgationTrending' to="/">Featured</Link></li>
            <li><Link className='Link-NavgationTrending' to="/Latest">Latest</Link></li>
            <li><Link className='Link-NavgationTrending' to="/Bestseller"> Bestseller</Link></li>
            <li><Link className='Link-NavgationTrending' to="/Special">Special</Link></li>
        </ul>
        <Outlet/>
    </div>
    </>
)
}
export default NavgationTrending