

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function EmployeeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/employee/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("employeeId", res.data.id);
      localStorage.setItem("employeeName", res.data.name); 
      navigate(`/employee/dashboard/${res.data.id}`);
    } catch (err) {
      alert("Invalid email or password");
      console.error(err);
    }
  };

  // ===== STYLING =====
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #667eea, #764ba2)", // smooth purple-blue gradient
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.25)", // subtle dark overlay
    zIndex: 0
  };

  const cardStyle = {
  position: "relative",
  zIndex: 1,
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  borderRadius: "25px",
  padding: "50px 40px",
  width: "400px",
  maxWidth: "90%",
  boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // ✅ center horizontally like Admin
  textAlign: "center"   // ✅ center text inside card
};

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#1F2937",
    alignSelf: "center"
  };

  const inputStyle = {
  width: "90%",        // ✅ slightly narrower so inputs are centered
  padding: "15px 20px",
  marginBottom: "20px",
  borderRadius: "15px",
  border: "1px solid #CBD5E1",
  fontSize: "1rem",
  outline: "none",
  textAlign: "left",    // keep text inside input left-aligned
  transition: "0.3s",
};

  const buttonStyle = {
    width: "100%",
    padding: "15px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(90deg, #10B981, #3B82F6)", // green to blue gradient
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
      <div style={overlayStyle}></div>

      <div style={cardStyle}>
        <h2 style={titleStyle}>Employee Login</h2>

        <form style={{ width: "100%" }} onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
