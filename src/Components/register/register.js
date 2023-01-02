import React from 'react'
import "./register.css"
 const Register = () => {
  return (
    <div className="register">
        <h1>Register</h1>
        <input type="text" placeholder="Enter Name"></input>
        <input type="text" placeholder="Enter Email"></input>
        <input type="password" placeholder="Enter password"></input>
        <input type="password" placeholder="Re-Enter password"></input>

    <div className="button">Register</div>
    <div>or</div>
    <div className="button">Login</div>
    </div>
  )
}

export default Register;