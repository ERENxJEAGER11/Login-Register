import React, { useState } from 'react'
import "./login.css"
const Login = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
 })

 const handleChange = e => {
   // console.log(e.target);
   const { name, value } = e.target;
   setUser({
     ...user,
     [name]: value
   })
 }

  return (
    <div className="login">
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange}></input>
    <div className="button">Login</div>
    <div>or</div>
    <div className="button">Register</div>
    </div>
  )
}
export default Login;