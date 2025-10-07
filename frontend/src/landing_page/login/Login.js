import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3002/api/user/login",
        { email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (data.success) {
        toast.success(data.message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001"; // dashboard URL
        }, 1000);
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    }

    setInputValue({ email: "", password: "" });
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Login</h2>
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
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleOnChange}
          required
          style={{ display: "block", width: "100%", marginBottom: 10 }}
        />
        <button type="submit" style={{ width: "100%" }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: 10 }}>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Login;
