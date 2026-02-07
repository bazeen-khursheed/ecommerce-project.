import React, { useState } from 'react'
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from "react-hot-toast"


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  async function submit(e) {
    e.preventDefault()
    try {
      const data = await axios.post("http://localhost:8080/login", {
        email,
        password
      })
      alert("Login Successfully!")
      navigate("/dashboard");

      console.log(data)
    } catch (error) {
      alert("Please try again later!")
    }
  }


  return (
    <div className="container">
      <div className="tabs">
        <Link to={"/login"}><button className="tab-active">Login</button></Link>
        <Link to={"/"}><button className="tab">Sign Up</button></Link>
      </div>

      <form onSubmit={(e) => submit(e)} id="loginForm">

        <label>Email address</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email address" required />

        <div className="password-header">
          <label>Password</label>
          <a href="#" className="forgot">Forgot password?</a>
        </div>

        <div className="password-box">
          <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      <div className="divider">OR</div>

      <div className="social-login">
        <button className="social google">Continue with Google</button>
      </div>

      <p className="signup-text">
        Don’t have an account yet? <Link to={"/"}>Sign up</Link>
      </p>
    </div>
  )
}

export default Login