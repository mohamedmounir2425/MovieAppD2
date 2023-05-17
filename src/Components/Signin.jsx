import React, { useEffect, useState } from "react";
import { axoisPost } from "../Api/Api";
import { useNavigate } from "react-router-dom";


export default function Signin() {
  const navigate = useNavigate()
  const [loading , setLoading] = useState(false)
  const [errMsg , setErrMsg] = useState('')
  const [user, setUser] = useState({
      email:'',
      password:'',
  })
  
  function getFormData({target}) {
      setUser({
          ...user,
          [target.name] : target.value

      })
  }

async function sendData(e) {
  e.preventDefault()
  setLoading(true)
  let response = await axoisPost(user,'signin')

  if(response.message === 'success') {
      localStorage.setItem('token',response.token)
      navigate('/home')
      console.log('success',response)
      
    }else {
    console.log('faild',response)
      setLoading(false)
      setErrMsg(response.message)
  }
}  
    
  return (
    <>
      <h1 className="text-center">Login Form</h1>
      <form  className="myForm" onSubmit={sendData}>

       
        <label htmlFor="email">Email</label>
        <input onChange={getFormData} type="email" id="email" name="email" className="form-control my-3"/>

        <label htmlFor="password">Password</label>
        <input onChange={getFormData} type="text" id="password" name="password" className="form-control my-3"/>

        <button className="btn btn-primary">{loading ?<i className="fas fa-spinner fa-spin"></i>: 'SignIn'}</button>

      </form>
        {errMsg ? <p className="alert alert-danger mt-3 mx-auto">{errMsg}</p> : null}
    </>
  )
}
