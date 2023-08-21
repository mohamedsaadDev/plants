import React from 'react'
import { Link } from 'react-router-dom'
import "./Banner.css"
const Banner = (props) => {
return (
        <div className='Container-Banner'>
                <div className='Banner' >
                        <i className="fa-solid fa-house Icon-Banner"></i>
                        <Link className='Link-ToHome-Banner' to="/">
                        Home /  
                        </Link>
                        <span className='Title-Banner'>{props.title}</span>
                </div>
        </div>
) 
}

export default Banner