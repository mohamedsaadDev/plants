import React, { useState } from 'react'
import {TrendingProducts}from "../../../data/data"
import { Link } from 'react-router-dom'
import "./searshNav.css"
const SearshNav = ({shoserch,setshowserch}) => {
    const [search,setsearch]=useState("")
    let datasearch = TrendingProducts.filter(a=>a.title.includes(search))
    return (
        <>
        {shoserch? <div className='wraaper-form-sersh'>
        <i onClick={()=>setshowserch(false)} className="fa-sharp fa-solid fa-xmark hide-searsh-navbar"></i>
        <form className='form-input-searsh'>
            <select name="All Categories" id="" className='select-options-navbar'>
                <option value="">All Categories</option>
                <option value="">All Categories</option>
                <option value="">All Categories</option>
                <option value="">All Categories</option>    
                <option value="">All Categories</option>
            </select>
            <input value={search}
            onChange={(e)=>setsearch(e.target.value)}  type="Search" placeholder='  Searsh here...' className='input-sersh-navbar' />
            <button onClick={(e)=>e.preventDefault()} className='button-searsh-navbar'>
                <i className="fa-solid fa-magnifying-glass icon-navbar icon-searsh-input"></i>
            </button>
        </form>
        <div className='wraaper-Continer-Item-Search'>
            <div className='Continer-Item-Search' >
                {search.length > 0 ? datasearch.map(item => 
                <Link  to={`/prodects/${item.id}`}>
                <div key={item.id} className='Item-Search'>
                    <img className='Img-Item-Search' src={item.img} alt="" />
                    <div className='Info-Item-Search'>
                        <p className='Title-Item-Search'>{item.title}</p>
                        <p className='Price-Item-Search'>{item.price}</p>
                    </div>
                </div>
                </Link>
                ):'' }
            </div>
        </div>
    </div> :""}
        </>
    )
}
export default SearshNav