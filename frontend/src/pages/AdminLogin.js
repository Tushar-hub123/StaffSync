import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/admin/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/admin-dashboard");
    } catch {
      alert("Invalid Admin Credentials");
    }
  };

  // Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    position: "relative",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    overflow: "hidden",
  };

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1470&q=80') no-repeat center center",
    backgroundSize: "cover",
    filter: "blur(5px) brightness(0.6)",
    zIndex: -2
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
    zIndex: -1
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "25px",
    padding: "50px 40px",
    width: "400px",
    maxWidth: "90%",
    boxShadow: "0 10px 35px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#1F2937"
  };

  const inputStyle = {
    width: "100%",
    padding: "15px 20px",
    marginBottom: "20px",
    borderRadius: "15px",
    border: "1px solid #CBD5E1",
    fontSize: "1rem",
    outline: "none",
    transition: "0.3s",
  };

  const buttonStyle = {
    width: "100%",
    padding: "15px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(90deg, #4F46E5, #3B82F6)",
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  };

  const handleMouseOver = e => e.target.style.opacity = 0.85;
  const handleMouseOut = e => e.target.style.opacity = 1;

  return (
    <div style={containerStyle}>
      {/* Background image */}
      <div style={backgroundStyle}></div>
      {/* Overlay */}
      <div style={overlayStyle}></div>

      {/* Login Card */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          style={buttonStyle}
          onClick={handleLogin}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Login
        </button>
      </div>
    </div>
  );
}
