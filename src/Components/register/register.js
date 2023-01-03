import React, { useState } from 'react'
import "./register.css"
import axios from "axios"
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

  const registerUser = () => {
    const { name, email, password, reEnterPassword } = user
    if(name && email && password && (password === reEnterPassword)) {
      alert("posted")
    axios.post("http://localhost:9002/Register",{
      user
    }).then(res => console.log(res))
  }
  else{
    alert("invalid input")
  }
  }

  return (
    <div className="register">
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Enter Name" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Enter Password" onChange={handleChange}></input>

    <div className="button" onClick={registerUser}>Register</div>
    <div>or</div>
    <div className="button">Login</div>
    </div>
  )
}

export default Register;