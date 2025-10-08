import React, { useState } from "react";
import './signup.css';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_BASE_URL =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_API_URL
        : "http://localhost:3002";

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/user/register`,
        { email, username, password },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );

      if (data.success) {
        toast.success(data.message);
        setTimeout(() => navigate("/login"), 1000);
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Signup failed");
    }

    setInputValue({ email: "", username: "", password: "" });
  };

  return (
    <div className="signup-wrapper">
      <div className="form_container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleOnChange}
            required
          />
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleOnChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleOnChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default Signup;
