import React from 'react'
import BestsellersComponent from "../../components/Bestsellers/Bestsellers"
import {BlogData} from "../../data/blog"
import "./Blog.css"
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
const Blog = () => {
    return (
        <>
        <Banner title="Blig"/>
        <div className='Wrraper-Container-Blog'>
            <BestsellersComponent/>
            <div className='Container-Blog'>
                <h4 className='Title-Blog'>BLOGS</h4>
                {
                    BlogData.map(item => 
                    <div key={item.id} className='Container-Single-Blog'>
                        <img className='Img-Single-Blig' src={item.img} alt="" />
                        <div className='Container-Info'>
                            <span className='Date-Single-Blig'><i className="fa-regular fa-calendar-days"></i> {item.date} </span>
                            <b className='Title-Single-Blig'><Link to={`/Blog/${item.id}`} className='Link-Title-blog'>{item.title}</Link></b>
                            <p className='paragraph-Single-Blig'>{item.paragraph}</p>
                            <Link to={`/Blog/${item.id}`}><button className='btn-Single-Blig'>READ MORE</button></Link>
                        </div>
                    </div>
                    )
                }
                <div className='Pagination-Blog'>
                    Showing 1 to 5 of 5 (1 Pages)
                </div>
            </div>
        </div>
        </>
    )
}
export default Blog