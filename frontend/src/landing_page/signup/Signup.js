import React, { useState } from "react";
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

    try {
      const { data } = await axios.post(
        "http://localhost:3002/api/user/register",
        { email, username, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (data.success) {
        toast.success(data.message);
        setTimeout(() => navigate("/login"), 1000); // redirect to login
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
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleOnChange}
          required
          style={{ display: "block", width: "100%", marginBottom: 10 }}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleOnChange}
          required
          style={{ display: "block", width: "100%", marginBottom: 10 }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleOnChange}
          required
          style={{ display: "block", width: "100%", marginBottom: 10 }}
        />
        <button type="submit" style={{ width: "100%" }}>
          Sign Up
        </button>
      </form>
      <p style={{ marginTop: 10 }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Signup;
