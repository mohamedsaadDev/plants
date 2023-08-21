import React, { useState } from 'react'
import "./SingleProdect.css"
import { useParams } from 'react-router-dom'
import {TrendingProducts} from "../../data/data"
import Rating from "../../components/Rating/Rating"
import {addtocartqty} from "../../Function/addtocartqty"
import { useDispatch} from 'react-redux'
import Banner from '../../components/Banner/Banner'
const SingleProdect = () => {
    const {id}= useParams()
    const prodectData = TrendingProducts.find(p=> p.id === parseInt(id))
    const [qty,setqty]=useState(1)
    const disptch =useDispatch()
    return (
        <>
        <Banner title={prodectData.title}/>
        <div className='Wraaper-Conainer-SingleProdect'>
            <div className='Conainer-SingleProdect'>
                <div className='Container-Img'>
                    <img className='Img-Singleprodect' src={prodectData.img} alt="" />
                </div>
                <div className='Container-Info-Singleprodect'>
                    <h4 className='Title-Item-Singleprodect'>{prodectData.title}</h4>
                    <div className='reviews-Rating-Singleprodect'>
                        <Rating rating={prodectData.rating}/>
                        <span className='reviews-Singleprodect'> reviews :{prodectData.reviews} </span>
                    </div>
                    <hr className='Line-Singleprodect' />
                    <ul className='List-Singleprodect' >
                        <li className='Sub-List-Singleprodect'>
                            <span>Brand:</span>
                            <span>Product Code:</span>
                            <span>Availability:</span>
                        </li>
                        <li className='Sub-List-Singleprodect'>
                            <span className='Data-List-Singleprodect' >{prodectData.Brand}</span>
                            <span className='Data-List-Singleprodect' >{prodectData.ProductCode}</span>
                            <span className='Data-List-Singleprodect' >{prodectData.Availability}</span>
                        </li>
                    </ul>
                    <hr  className='Line-Singleprodect'/>
                    <b className='Price-Singleprodect'> $ {prodectData.price}</b>
                    <span className='Extax-Singleprodect'>Ex Tax : {prodectData.Extax} $</span>
                    <hr className='Line-Singleprodect' />
                    <h5 className='title-qty-Singleprodect'>Qty</h5>
                    <div className='Wraaper-Contianer-qty-singleprodect'>
                        <div className='Contianer-qty-singleprodect'>
                            <button onClick={()=>setqty(qty+1)} className='Btn-postev-Singleprodect'>+</button>
                            <span className='Show-Qty-Singleprodect'>{qty}</span>
                            <button disabled={qty <= 1} onClick={()=>setqty(qty - 1)} className='Btn-negative-Singleprodect'>-</button>
                        </div>
                        <button onClick={()=>addtocartqty(prodectData,disptch,qty)} className='Btn-Addtocart-Singleprodect'>ADD TO CART</button>
                    </div>
                    <hr className='Line-Singleprodect' />
                </div>
            </div>
        </div>
        </>
)
}
export default SingleProdect