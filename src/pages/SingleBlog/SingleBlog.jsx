import React from 'react'
import "./SingleBlog.css"
import { useParams } from 'react-router-dom'
import {BlogData}from "../../data/blog"
import Bestsellers from "../../components/Bestsellers/Bestsellers"
import Banner from '../../components/Banner/Banner'
const SingleBlog = () => {
    const {id} = useParams() // id = "id"
    const BlogDatelse = BlogData.find(p=> p.id === parseInt(id)) 
    console.log(BlogDatelse)
    return (
        <>
        <Banner title={BlogDatelse.title}/>
        <div className='Wraaper-Continer-SingleBlog'>
            <Bestsellers/>
            <div className='Continer-SingleBlog'>
                <h5 className='One-Title-SingleBlog'>{BlogDatelse.title}</h5>
                <img className='Img-SingleBlog' src={BlogDatelse.img} alt="" />
                <span className='Date-SingleBlog'>{BlogDatelse.date}</span>
                <h4 className='middel-Title-SingleBlog'>{BlogDatelse.title}</h4>
                <p className='paragraph-SingleBlog'>{BlogDatelse.paragraph}</p>
            </div> 
        </div>
        </>
    )
}
export default SingleBlog