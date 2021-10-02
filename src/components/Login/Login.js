import React, { useState } from "react";
import "../Signin/style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import validation from "../Signin/validation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({setIsLogin}) => {
  const history = useHistory();

const [user, setUser] = useState({
  email:'',
  password:''
})

const [err,setErr]=useState('')

  const onChangeInput=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value})
    setErr(validation(user))
  }
  const loginSubmit=async(e)=>{
    e.preventDefault();
    try {
        const res=await axios.post('/users/login',{
            email:user.email,
            password:user.password
        })
        setUser({email:'',password:''})
        localStorage.setItem('tokenStore',res.data.token)
        toast.success('Login Success!');
        history.push('/')
    } catch (error) {
      toast.error("Invalid Login")
        // err.response.data.msg && setErr(err.response.data.msg)
    }
}
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="login">
            <h2>LOGIN</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOX4mkcW8pH9FbpI9rTBkokiMxSY2GJ3eyw&usqp=CAU" />
            <form onSubmit={loginSubmit} method="POST" className="login-form">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="login-email"
                  name="email"
                  placeholder="Enter Your Email"
                  // autoComplete="off"
                  value={user.email}
                  onChange={onChangeInput}/>
                {err.email && <p className="error">{err.email} </p>}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="login-password"
                  name="password"
                  placeholder="Enter Your Password"
                  autoComplete="off"
                  value={user.password}
                  onChange={onChangeInput} />
                {err.password && <p className="error">{err.password} </p>}
              </div>

              <div className="form-group">
                <button>Login</button>
              </div>
            </form>
            <div className="footer">
              <p className="text">Don't have an Account</p>
              <div className="button">
                <button onClick={() => history.push("/register")}>SIGNUP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
