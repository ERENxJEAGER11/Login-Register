import React, { useState } from 'react'
import "./register.css"
 const Register = () => {

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
    <div className="register">
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Enter Name" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Enter Password" onChange={handleChange}></input>

    <div className="button">Register</div>
    <div>or</div>
    <div className="button">Login</div>
    </div>
  )
}

export default Register;