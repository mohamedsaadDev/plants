import React from 'react'
import { useSelector } from 'react-redux'
import "./wishlist.css"
import BestsellersComponent from '../../components/Bestsellers/Bestsellers'
import { useDispatch } from "react-redux";
import { wishlistaction } from '../../Redux/slice/wishlistSlice';
import Banner from '../../components/Banner/Banner';
const Wishlist = () => {
    const {wishlists}=useSelector(state=> state.wishlist)
    const dispatch = useDispatch()
    return (
        <>
        <Banner title="wishlists"/>
        <div className='Wrapper-Continer-Wishlist'>
        <BestsellersComponent/>
            <div className='Continer-Wishlist'>
                <div className='Top-Wishlist'>
                    <i className="fa-solid fa-list Icon-Grid-wishlist"></i>
                    <i className="fa-solid fa-grip-vertical Icon-Iast-wishlist"></i>
                    <span className='Iength-wishlast'>Wishlist ({wishlists.length})</span>
                </div>
                <div className='Wrapper-Continer-Item-Wishlist'>
                    {
                        wishlists.map((item)=> 
                        <div key={item.id} className='Continer-Item-Wishlist'>
                            <img className='Img-Item-Wishlast' src={item.img} alt="" />
                            <div className='Info-Item-Wishlist'>
                                <h5 className='Title-Item-Wishlast'>{item.title}</h5>
                                <span className='Price-Item-Wishlast'>$ {item.price}</span>
                                <i title='Remove Item To Wishlist'
                                onClick={()=>dispatch(wishlistaction.removeitem(item.id))} 
                                className="fa-solid fa-trash Icon-remove-Item-Wishlast"></i> 
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
        </>
    )
}
export default Wishlist