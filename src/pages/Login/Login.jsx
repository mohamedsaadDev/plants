import React from 'react'
import "./Login.css"
import BestsellersComponent from '../../components/Bestsellers/Bestsellers'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
const Login = () => {
    return (
        <>
        <Banner title="Login"/>
        <div className='Wrapper-Container-Login'>
            <BestsellersComponent/>
            <div className='Container-Login'>
                <div className='Container-New-Customer'>
                    <h5 className='Title-New-Customer'>New Customer</h5>
                    <p className='Top-text-New-Customer'>Register Account</p>
                    <p className='text-New-Customer'>
                    By creating an account you will be able to shop faster, 
                    be up to date on an order's status, 
                    and keep track of the orders you have previously made.
                    </p>
                    <Link to="/Register"><button className='btn-New-Customer'>CONTINUE</button></Link>
                </div>
                <div className='Container-Returning-Customer'>
                    <h5 className='Title-Returning-Customer'>Returning Customer</h5>
                    <p className='Text-Returning-Cutomser'>I am a returning customer</p>
                    <form>
                        <label className='Label-Login' htmlFor="">E-Mail Address</label>
                        <input className='Input-Login' placeholder='   E-Mail Address' type="email" />
                        <label className='Label-Login' htmlFor="">Password</label>
                        <input className='Input-Login' placeholder='   Password' type="password" />
                        <button onClick={(e)=>e.preventDefault()} className='Btn-Login'>LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login