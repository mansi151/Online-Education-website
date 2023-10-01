import React, { useState } from "react";
import bg from "../bg.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const chfname = (e) => {
    setFname(e.target.value);
  };
  const chlname = (e) => {
    setLname(e.target.value);
  };
  const chuser = (e) => {
    setUser(e.target.value);
  };
  const chemail = (e) => {
    setEmail(e.target.value);
  };
  const chpwd = (e) => {
    setPassword(e.target.value);
  };
  const chcp = (e) => {
    setPass(e.target.value);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("hello..");
    try {
      console.log("howw..");
      await axios.post("http://localhost:4000/register", {
        fname,
        lname,
        email,
        password,
        pass,
        user,
      });
      console.log("Heyy..");
      alert("User Signed up successfully.");
      navigate("/signin");
      setEmail("");
      setPassword("");
      setPass("");
      setFname("");
      setLname("");
      setUser("");
    } catch (error) {
      console.error("Error Signing up : ", error);
      alert("An error occurred");
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
            <h3 style={{ fontWeight: 700, letterSpacing: "2px" }}>
              REGISTRATION
            </h3>
          </div>
          <div>
            <Link className="home-link" to="/">
              Home
            </Link>{" "}
            / Registration
          </div>
        </div>
      </div>

      <form onSubmit={handlesubmit} method="post">
        <div className="container8">
          <div className="header">
            <div className="text">REGISTRATION</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <label htmlFor="first name" className="f_name">
              First Name
            </label>
            <input
              type="text"
              placeholder="First name"
              value={fname}
              onChange={chfname}
              required
            />

            <label className="f_name">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={chlname}
              required
            />

            <label className="img2">Email Address</label>
            <input
              type="email"
              value={email}
              placeholder="Email address"
              onChange={chemail}
              required
            />

            <label className="f_name">User Name</label>
            <input
              type="text"
              placeholder="Username"
              value={user}
              onChange={chuser}
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

            <label className="img3">Confirm Password</label>
            <input
              type="password"
              value={pass}
              onChange={chcp}
              placeholder="Confirm password"
              required
            />
            <input type="submit" className="button" value="REGISTER NOW" />

            <div className="have_account text-center">
              <p>Already have an account ?</p>
              <Link className="nav-link" to="/Signin">
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Register;
