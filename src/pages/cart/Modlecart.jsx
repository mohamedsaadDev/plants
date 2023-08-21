import "./cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { cartaction } from "../../Redux/slice/cartSlice"
const Modelcart = ({setcartmodle}) => {
    const dispatch = useDispatch()
    const {cartitems}=useSelector(state => state.cart)
    const subtotal = cartitems.reduce((acc,cur)=> acc + cur.price * cur.quantity,0)
    const Ecotax = cartitems.reduce((acc,cur)=> acc + cur.EcoTax * cur.quantity ,0)
    const valueVat = subtotal / 5
    const Totla = Ecotax + valueVat + subtotal
    return (
        <div className='wrapper-contianer-cart'>
            {cartitems.length <= 0 ? 
            <h1 className="message-cart">Your shopping cart is empty!</h1>:
            cartitems.map((item)=> 
            <div key={item.id} className="contianer-cart">
                <img className="img-item-cart" src={item.img} alt="" />
                <div className="info-item-cart">
                    <h5 className="title-item-cart">{item.title}</h5>
                    <span className="price-item-cart">$ {item.price}</span>
                    <span>{item.quantity}</span>
                </div>
                <i onClick={()=>dispatch(cartaction.removeitem(item.id))} className="fa-solid fa-trash-can icon-x-cart"></i>
            </div>
            ) 
            }
            {cartitems.length  > 0 ?  <div className="contianer-pricetable-cart">
                <table className="wrapper-subtable-cart">
                    <tr>
                        <td colSpan="2">Sub-Total</td>
                        <td>${subtotal}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Eco Tax (2.00)</td>
                        <td>$ {Ecotax}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">VAT (20%)</td>
                        <td>$ {valueVat.toFixed(2)} </td>
                    </tr>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td> $ {Totla.toFixed(2)}</td>
                    </tr>
                </table>
                <Link to='/Login'><button onClick={()=>setcartmodle(false)} className="Btn-Cart">Checkout</button></Link>
            </div>:''}
        </div>
    )
}
export default Modelcart