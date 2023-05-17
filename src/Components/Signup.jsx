import React, { useEffect, useState } from "react";
import { axoisPost } from "../Api/Api";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

export default function Signup() {


    const navigate = useNavigate()
    // const [isError , setIsError] = useState(false)
    const [errDetails,setErrDetails] = useState([])
    const [loading , setLoading] = useState(false)
    const [errMsg , setErrMsg] = useState('')
    const [user, setUser] = useState({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        age: 24,
    })
    
    function validateUser() {
      let rules = Joi.object({
        first_name:Joi.string().alphanum().min(3).max(15).required(),
        last_name:Joi.string().alphanum().min(3).max(15).required(),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })   ,
        password:Joi.string().pattern(/^[A-Z]/).required(),
        age: Joi.number().min(15).max(50).required(),
      })


      let validateResult = rules.validate(user,{abortEarly:false})
      console.log(validateResult)
    
      if(validateResult.error !== undefined) {
        setErrDetails(validateResult.error.details)
        return false
      }else {
        return true
      }
    }
    function getFormData({target}) {
        setUser({
            ...user,
            [target.name] : target.value

        })
        // obj.first_name = target.value
    }

  async function sendData(e) {
    e.preventDefault()
    
    if(validateUser()) {
    setLoading(true)
    let response = await axoisPost(user,'signup')

    if(response.message === 'success') {
        // setIsError(false)
        navigate('/')

    }else {
        setLoading(false)
        // setIsError(true)
        console.log('mano')

        setErrMsg(response.errors.email.message)
    }
    }

  }  
  function showError(nameInput) {

    let errMsg = errDetails.filter(err => {
      return err.message.toLowerCase().includes(nameInput.toLowerCase())
    })
    console.log(errMsg)
    if (errMsg.length !== 0 ) {
      let message = errMsg[0].message
      if(message.includes('pattern')) {
        message = 'Password must start capital letter'
        }

      return message 
    }

  }
  return (
    <>

    {/* {errDetails.map((err) => {
      let errMsg = err.message
      if(err.message.toLowerCase().includes('pattern')) {
        errMsg = 'Password must start capital letter'
      }
      return <p className="text-danger" > {errMsg}</p>
    })} */}
      <h1 className="text-center">Registeration Form</h1>
      <form  className="myForm" onSubmit={sendData}>

        <label htmlFor="first_name">First Name</label>
        <input onChange={getFormData} type="text" id="first_name" name="first_name" className="form-control my-3"/>
        <p className="text-danger">{errDetails.length !== 0 ? showError('first_name'):''}</p>
        {/* {errDetails.length !== 0  ? showError('first_name'):<p>manooooooooooooo</p> } */}
       

        <label htmlFor="last_name">Last Name</label>
        <input onChange={getFormData}  type="text" id="last_name" name="last_name" className="form-control my-3"/>
        <p className="text-danger">{errDetails.length !== 0 ? showError("last_name"):''}</p>

        <label htmlFor="email">Email</label>
        <input onChange={getFormData} type="email" id="email" name="email" className="form-control my-3"/>
        <p className="text-danger">{errDetails.length !== 0 ? showError("email"):''}</p>

        <label htmlFor="password">Password</label>
        <input onChange={getFormData} type="text" id="password" name="password" className="form-control my-3"/>
        <p className="text-danger">{errDetails.length !== 0 ? showError("password"):''}</p>

        <button className="btn btn-primary">{loading ?<i className="fas fa-spinner fa-spin"></i>: 'SignUp'}</button>
      </form>
        {errMsg ? <p className="alert alert-danger mt-3 mx-auto">{errMsg}</p> : null}
    </>
  );
}
