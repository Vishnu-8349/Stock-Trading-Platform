import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

    const API_URL = "https://stock-trading-platform-tpa4.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${API_URL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          // navigate("https://stock-trading-platform-2-l9hk.onrender.com");
          window.location.href = "https://stock-trading-platform-steel.vercel.app";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row p-5 mt-5 mb-5">
        <h1 className="text-muted text-center">
          Open a free demat and trading account online
        </h1>
        <p className="text-center fs-4 text-muted mt-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row mb-5">
        <div className="col-5">
          <img src="media\images\signup.png" />
        </div>
        <div className="col-2"></div>
        <div className="col-5 mb-4">
              <div className="form_container">
            <h2>Signup Account</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label htmlFor="email">Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                />
              </div>
              <button type="submit">Submit</button>
              <span>
                Already have an account? <Link to={"/login"}>Login</Link>
              </span>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img src="media\images\acop-benefits.svg" style={{width: "80%"}} className="mb-3"/>
          <h3>Benefits of opening a Zerodha demat account</h3>
        </div>
        <div className="col-1"></div>
        <div className="col-5 mb-5">
          <h3 className="mb-4">Unbeatable pricing</h3>
          <p className="text-muted fs-5 mb-4">Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
          <h3 className="mb-4">Best investing experience</h3>
          <p className="text-muted fs-5 mb-4">Simple and intuitive trading platform with an easy-to-understand user interface.</p>
          <h3 className="mb-4">No spam or gimmicks</h3>
          <p className="text-muted fs-5 mb-4">Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
          <h3 className="mb-4">Unbeatable pricing</h3>
          <p className="text-muted fs-5 mb-4">More than just an app — gain free access to the entire ecosystem of our partner products.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
