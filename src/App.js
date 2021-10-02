import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signin/Signup";
import Home from "./components/Home";
// import Login from "./components/Login";

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
          {/* {isLogin ? <Home/> : <Login setIsLogin={setIsLogin} />} */}
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/register" component={Signup} />
        {/* <Route exact path="/home" component={Home} /> */}
      </Switch>
    </Router>
  );
}

export default App;
