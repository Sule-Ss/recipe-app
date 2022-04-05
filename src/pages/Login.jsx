import React from "react";
import loginImage from "../assets/login.jpg";

function Login() {
  return (
    <div className="loginContainer">
        <input type="text" placeholder="USERNAME" />
        <input type="text"  placeholder="PASSWORD"/>
        <button className="btn">LOGIN</button>
    </div>
  );
}

export default Login;
