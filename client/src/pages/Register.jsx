import React, { useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    async function submit(e) {
        e.preventDefault()
        try {
            const data = await axios.post("http://localhost:8080/register", {
                name,
                email,
                password,
                phone
            })
            toast.success('Successfully regisered!')
            navigate("/login")
        } catch (error) {
            toast.error("please try again later!")
        }
    }


    return (
        <div className="container">
            <div className="tabs">
                <Link to={"/login"}><button className="tab ">Login</button></Link>
                <Link to={"/"}><button className="tab active">Sign Up</button></Link>
            </div>

            <form onSubmit={(e) => submit(e)} id="loginForm">
                <label>Name</label>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" required />

                <label>Email address</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email address" required />
                <label>Phone Number</label>
                <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Enter your phone number" required />

                <div className="password-header">
                    <label>Password</label>
                </div>

                <div className="password-box">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Enter your password" required />
                </div>

                <button type="submit" className="login-btn">Sign Up</button>
            </form>

            <div className="divider">OR</div>

            <div className="social-login">
                <button className="social google">Continue with Google</button>
            </div>

            <p className="signup-text">
                Have an account yet? <Link to="/login">Login</Link>
            </p>
        </div>
    )
}

export default Register