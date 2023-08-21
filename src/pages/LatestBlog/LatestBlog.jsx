import React from 'react'
import "./LatestBlog.css"
import { Link } from 'react-router-dom'
import {BlogData} from "../../data/blog"
const LatestBlog = () => {
    return (
        <div className='Continer-LatestBloges'>
            <h2 className='title-LatestBlog'>Latest Blog</h2>
                    <div className='Wrapper-Item-LatestBlog'>
                        <div className='Container-Item-LatestBlog'>
                            <img className='Img-Item-LatestBlog' src={BlogData[0].img} alt="" />
                            <div className='Box-Info-LatestBlog'>
                                <span className='Date-Item-LatestBlog'><i className="fa-regular fa-calendar-days"></i> {BlogData[0].date}</span>
                                <h3 className='title-Item-LatestBlog'>{BlogData[0].title}</h3>
                                <p className='paragraph-Item-LatestBlog'>{BlogData[0].partBlog}</p>
                                <Link to={`/Blog/${BlogData[0].id}`} className='Link-Btn-LatestBlog'><button className='btn-Item-LatestBlog'>READ MORE</button></Link>
                            </div>
                        </div>
                        <div className='Container-Item-LatestBlog'>
                            <img className='Img-Item-LatestBlog' src={BlogData[1].img} alt="" />
                            <div className='Box-Info-LatestBlog'>
                                <span className='Date-Item-LatestBlog'><i className="fa-regular fa-calendar-days"></i> {BlogData[1].date}</span>
                                <h3 className='title-Item-LatestBlog'>{BlogData[1].title}</h3>
                                <p className='paragraph-Item-LatestBlog'>{BlogData[1].partBlog}</p>
                                <Link to = {`/Blog/${BlogData[1].id}`}className='Link-Btn-LatestBlog'><button className='btn-Item-LatestBlog'>READ MORE</button></Link>
                        </div>
                        </div>
                    </div>
        </div>
    )
}
export default LatestBlog