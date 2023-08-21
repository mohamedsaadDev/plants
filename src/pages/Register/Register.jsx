import React, { useState, useRef } from 'react'
import "./Register.css"
import BestsellersComponent from '../../components/Bestsellers/Bestsellers'
import { Link } from 'react-router-dom'
import {handleName} from "../../Function/handleName"
import {handleEmail} from "../../Function/handleEmail"
import {handlepassword} from "../../Function/handlepassword"
import {handlephone} from "../../Function/handlephone"
import Banner from '../../components/Banner/Banner'
const Register = () => {
    const [firstName, setfirstName]=useState("")
    const [LastName, setLastName]=useState("")
    const [Email, setEmail]=useState("")
    const [password, setpassword]=useState("")
    const [phone, setphone]=useState("")
    const selectFirstName= useRef()
    const selectLasrName= useRef()
    const selectEmail= useRef()
    const selectpassword= useRef()
    const selectphone= useRef()
    function handleFormRegister (e){
        handleName(firstName,selectFirstName,e)
        handleName(LastName,selectLasrName,e)
        handleEmail(Email,selectEmail,e)
        handlephone(phone ,selectphone,e)
        handlepassword(password,selectpassword,e)
    }
    return (
        <>
        <Banner title="Register"/>
        <div className='Wraaper-Register'>
            <BestsellersComponent/>
            <div className='Container-Register'>
                <h3 className='Top-title-Register'>REGISTER ACCOUNT</h3>
                <p className='Top-text-Register'>If you already have an account with us, please login at the <Link className='Link-TransfertoLogin-Register' to="/Login">login page</Link>.</p>
                <h4 className='Middle-title-Register'>Your Personal Details</h4>
                <form>
                    <div className="Container-Item-Register">
                        <label className="Lable-Register" htmlFor=""><span className="Before-title-Register">* </span>First Name</label>
                        <input onChange={(e)=>setfirstName(e.target.value)} placeholder="      First Name" className='Input-Register' type='text'></input>
                    </div>
                    <div ref={selectFirstName} className='Container-Erorr-Register'>
                        <p  className='Masgee-Register'>First Name must be between 1 and 32 characters!</p>
                    </div>
                    <div className="Container-Item-Register">
                        <label className="Lable-Register" htmlFor=""><span className="Before-title-Register">* </span>Last Name</label>
                        <input onChange={(e)=>setLastName(e.target.value)} placeholder="      Last Name" className='Input-Register' type='text'></input>
                    </div>
                    <div ref={selectLasrName} className='Container-Erorr-Register'>
                        <p  className='Masgee-Register'>Last Name must be between 1 and 32 characters!</p>
                    </div>
                    <div className="Container-Item-Register">
                        <label className="Lable-Register" htmlFor=""><span className="Before-title-Register">* </span>E-Mail</label>
                        <input onChange={(e)=>setEmail(e.target.value)} placeholder="      E-Mail" className='Input-Register' type='text'></input>
                    </div>
                    <div ref={selectEmail} className='Container-Erorr-Register'>
                        <p  className='Masgee-Register'>E-Mail Address does not appear to be valid!</p>
                    </div>
                    <div className="Container-Item-Register">
                        <label className="Lable-Register" htmlFor=""><span className="Before-title-Register">* </span>Telephone</label>
                        <input onChange={(e)=>setphone(e.target.value)} placeholder="      Telephone" className='Input-Register' type='text'></input>
                    </div>
                    <div ref={selectphone} className='Container-Erorr-Register'>
                        <p  className='Masgee-Register'>Telephone must be between 3 and 32 characters!</p>
                    </div>
                    <h6 className='Title-password-Register'>Your Password</h6>
                    <div className="Container-Item-Register">
                        <label className="Lable-Register" htmlFor=""><span className="Before-title-Register">* </span>Password</label>
                        <input  onChange={(e)=>setpassword(e.target.value)} placeholder="      Password" className='Input-Register' type='password'></input>
                    </div>
                    <div ref={selectpassword} className='Container-Erorr-Register'>
                        <p  className='Masgee-Register'>Password must be between 4 and 20 characters! </p>
                    </div>
                    <div className="Container-Item-Register">
                        <label className="Lable-Register" htmlFor=""><span className="Before-title-Register">* </span>Password Confirm</label>
                        <input placeholder="        Password Confirm" className='Input-Register' type='password'></input>
                    </div>
                    <div className='Container-Erorr-Register'>
                        <p  className='Masgee-Register'>Password must be between 4 and 20 characters!</p>
                    </div>
                    <div className="Container-btn-Register">
                        <span className='Text-chechbox-Register'>I have read and agree to the Privacy Policy<input type="checkbox" /></span>
                        <button onClick={(e)=>handleFormRegister(e)} className='Btn-Register'>CONTINUE</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Register