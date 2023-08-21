import React,{useState} from 'react'
import "./Prodect.css"
import BestsellersComponent from '../../components/Bestsellers/Bestsellers'
import prodectbanner from "../../imges/prodectbanner.jpg"
import {TrendingProducts}from "../../data/data"
import { Link } from 'react-router-dom'
import Rating from "../../components/Rating/Rating"
import { useDispatch } from 'react-redux'
import {handledispatcwishlist} from "../../Function/handlAddWishlast"
import {handlAddToCart} from "../../Function/handlAddToCart"
import Banner from '../../components/Banner/Banner'
import Modal from '../Modal/Modal'
import Pagination from './pagination/Pagination'
const Prodects = () => {
    const NumberPage = 6
    const pages = Math.ceil(TrendingProducts.length / NumberPage)
    const [currentPage,setcurrentPage]= useState(1)
    const startIndex = (currentPage -  1) * NumberPage
    const finishIndex = currentPage * NumberPage
    const orderedproducts = TrendingProducts.slice(startIndex, finishIndex)
    const dispatch = useDispatch()
    const [Last, setLast]= useState(false)
    const [openModeal,setopenModeal]=useState(false)
    const [prodactdata,setprodactdata]=useState(null)
    function hadeallproducts (item){
        setopenModeal(true)
        setprodactdata(item)
    }
    return (
        <>
        {openModeal&& <Modal setopenModeal ={setopenModeal} prodactdata={prodactdata}/>}
        <Banner title="Prodects"/>
        <div className="Wraaper-Container-Prodects">    
            < BestsellersComponent/>
            <div className="Container-Prodects">
                <img className='Img-Top-Prodects' src={prodectbanner} alt="" />
                <p className='Pragraph-Prodects'>Shop Laptop feature only the best laptop deals on the market. By comparing laptop 
                    deals from the likes of PC World, Comet, Dixons, The Link and Carphone Warehouse, 
                    Shop Laptop has the most comprehensive selection of laptops on the internet. At Shop Laptop, 
                    we pride ourselves on offering customers the very best laptop deals.
                    From refurbished laptops to netbooks, Shop Laptop ensures that every laptop - 
                    in every colour, style, size and technical spec - is featured on the site at the 
                    lowest possible price.
                </p>
                <div className="Box-Top-prodects">
                    <i onClick={()=>setLast(false)} className="fa-solid fa-list Icon-Grid-wishlist"></i>
                    <i onClick={()=>setLast(true)} className="fa-solid fa-grip-vertical Icon-Iast-wishlist"></i>
                    <span className='Iength-wishlast'></span>
                </div>
                <div className={Last ?'WraaperContainer-Prodect-Last':'WraaperContainer-Prodect'}>
                    {
                        orderedproducts.map(item=> 
                            <div key={item.id} className={Last?"Container-Prodect-Last":"Container-Prodect"}>
                                <Link to={`/prodects/${item.id}`}><img className={Last?'Img-Prodect-Last':'Img-Prodect'} src={item.img} alt="" /></Link>
                                <div className={Last?'Info-Item-Prodect-Last':'Info-Item-Prodect'}>
                                    <h4 className={Last?"Title-Prodect-Last":"Title-Prodect"}>{item.title}</h4>
                                    <Rating rating={item.rating}/>
                                    <span className={Last?"Price-Prodect-Last":"Price-Prodect"}> $ {item.price}</span>
                                    <p className={Last?'Pragraph-Prodect-Last':'Pragraph-Prodect'}>{item.details}</p>
                                    <div  className={Last?"Container-Icon-Prodect-Last":"Container-Icon-Prodect"}>
                                        <i onClick={()=>handlAddToCart(item, dispatch)} className="fa-sharp fa-solid fa-cart-plus Icon-Prodect"></i>
                                        <i onClick={()=>handledispatcwishlist(item,dispatch)}  className="fa-regular fa-heart Icon-Prodect"></i>
                                        <i onClick={()=>hadeallproducts(item)} className="fa-sharp fa-regular fa-eye Icon-Prodect"></i>          
                                    </div>
                                </div>
                            </div>
                            )}
                </div>
                <Pagination 
                pages={pages} 
                currentPage={currentPage} 
                setcurrentPage={setcurrentPage}/>
            </div>
        </div>
        </>
    )
}
export default Prodects