import React, { useRef, useState } from 'react'
import {handleName} from "../../Function/handleName"
import { handleEmail } from '../../Function/handleEmail'
const Form = () => {
    const [Name,setName]= useState("")
    const [Email,setEmail]= useState("")
    const selectName= useRef()
    const selectEmail= useRef()
    function handleonCllickContactUs (e){
        handleName(Name, selectName,e)
        handleEmail(Email, selectEmail,e)

    }
    return (
        <div className='Container-Form'>
            <h5 className='Title-Top-Form'>Contact Form</h5>
            <hr className='Line-ContactUs'/>
            <form className='Forms'>
                <div className='Container-Input'>
                    <div className='Container-Item-Input'>
                        <label className='Label-Title' htmlFor="YorName"><span className='before-Lable'>* </span> Your Name</label>
                        <input onChange={(e)=>setName(e.target.value)} className='Input-Text-ContactUs' type="text" />
                    </div>
                    <div ref={selectName} className='Container-Erorr-ContactUs'>
                        <p className='Masgee-ContactUs'> Name must be between 3 and 32 characters! </p>
                    </div>
                    <div  className='Container-Item-Input'> 
                        <label className='Label-Title' htmlFor="YorName"><span className='before-Lable'>* </span> E-Mail Address</label>
                        <input onChange={(e)=>setEmail(e.target.value)} className='Input-Text-ContactUs' type="text" />
                    </div>
                    <div ref={selectEmail} className='Container-Erorr-ContactUs'>
                        <p className='Masgee-ContactUs'>E-Mail Address does not appear to be valid! </p>
                    </div>
                    <div  className='Container-Item-Input'>
                        <label className='Label-Title' htmlFor="YorName"><span className='before-Lable'>* </span>Enquiry</label>
                        <textarea className='Textarea-ContactUs'></textarea>
                    </div>
                    <button onClick={(e)=>handleonCllickContactUs(e)} className='Btn-submet-ContactUs'>SUBMET</button>
                </div>
            </form>
    </div>
    )
}
export default Form