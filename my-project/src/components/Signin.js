import React, { useState } from "react";
import axios from "axios";
import bg from "../bg.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const chemail = (e) => {
    setEmail(e.target.value);
  };
  const chpwd = (e) => {
    setPassword(e.target.value);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    let response;
    try {
      response = await axios.post("http://localhost:4000/signin", {
        email,
        password,
      });
      console.log(response);
      const { message, uname } = response.data;
      localStorage.setItem("user", JSON.stringify({ message, uname }));
      navigate("/");

      alert("User Login successfully.");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error loging : ", error);
      alert("Login Failed.");
    }
  };
  return (
    <div>
      <div className="head-text">
        <div className="head-image">
          <img src={bg} alt="sorry" className="background" />
        </div>
        <div className="text-on-image">
          <div>
            <h3 style={{ fontWeight: 700, letterSpacing: "2px" }}>LOGIN</h3>
          </div>
          <div>
            <Link className="home-link" to="/">
              Home
            </Link>{" "}
            / Login
          </div>
        </div>
      </div>

      <form onSubmit={handlesubmit} method="post">
        <div className="container8">
          <div className="header">
            <div className="text">LOGIN</div>
          </div>
          <div className="inputs">
            <label className="img2">Email Address</label>
            <input
              type="email"
              value={email}
              placeholder="Email address"
              onChange={chemail}
              required
            />

            <label className="f_name">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={chpwd}
              required
            />

            <input type="submit" className="button" value="LOGIN" />
          </div>
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Signin;
