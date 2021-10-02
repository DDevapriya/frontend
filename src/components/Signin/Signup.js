import React, { useState } from "react";
import "../Signin/style.css";
import validation from "./validation";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [err,setErr]=useState({})

  const onChangeInput=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value})
    setErr(validation(user))
}

const registerSubmit=async (e)=>{
  e.preventDefault()
  setErr(validation(user))

  try {
      const res=await axios.post('/users/register',{
          username:user.name,
          email:user.email,
          password:user.password
      })
      setUser({name:'',email:'',password:''})
      toast.success('Register Successfully')
      // setUser(res.data.msg)
      history.push('/login')
  } catch (err) {
    toast.error("Invalid Form")
      // err.response.data.msg && setErr(err.response.data.msg)
  }
}

  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="login">
            <h2>WELCOME</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOX4mkcW8pH9FbpI9rTBkokiMxSY2GJ3eyw&usqp=CAU" />
            <form onSubmit={registerSubmit} method="POST" className="register-form" autoComplete="off">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="register-username"
                  name="name"
                  value={user.name}
                  placeholder="Enter Your Username"
                  autoComplete="off"
                  onChange={onChangeInput}
                />
                {err.name && <p className="error">{err.name} </p>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  placeholder="Enter Your Email"
                  autoComplete="off"
                  onChange={onChangeInput}
                />
                {err.email && <p className="error">{err.email} </p>}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={user.password}
                  placeholder="Enter Your Password"
                  autoComplete="off"
                  onChange={onChangeInput}
                />
                {err.password && <p className="error">{err.password} </p>}
              </div>

              <div className="form-group">
                <button>SIGN UP</button>
              </div>
            </form>
            <div className="footer">
              <p className="text">
                Already Do You Know account
              </p>
              <div className="button">
                <button onClick={() => history.push("/login")}>LOGIN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
