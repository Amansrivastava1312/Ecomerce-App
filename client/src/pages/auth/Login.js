import React from 'react'
import  {useState} from 'react'
import Layout from '../../component/layout/Layout.js'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify'
// import toast from 'react-hot-toast';
import '../../styles/AuthStyle.css'
const Login = () => {

    // const[name,setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");
    // const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
          if(res.data.success){
            toast.success("Registered Successfully")
            navigate('/home')
          }else{
            toast.error(res.data.message)
          }
          
        } catch (error) {
          console.log(error)
          toast.error('Something went wrong')
        } 
      };
  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container " style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Login
