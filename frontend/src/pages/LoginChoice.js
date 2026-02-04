

import { useNavigate } from "react-router-dom";

export default function LoginChoice() {
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #FF6B6B, #FFD93D)", // fun gradient background
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px"
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "50px",
    color: "#fff",
    textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
    textAlign: "center"
  };

  const cardContainerStyle = {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    justifyContent: "center"
  };

  const cardStyle = {
    backgroundColor: "#fff",
    width: "250px",
    height: "200px",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    transition: "transform 0.3s, box-shadow 0.3s"
  };

  const cardTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#1F2937"
  };

  const cardDescStyle = {
    fontSize: "1rem",
    color: "#4B5563",
    textAlign: "center",
    padding: "0 10px"
  };

  const handleMouseOver = e => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.3)";
  };

  const handleMouseOut = e => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Select Login Type</h2>
      <div style={cardContainerStyle}>
        <div
          style={cardStyle}
          onClick={() => navigate("/admin-login")}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <h3 style={cardTitleStyle}>Admin Login</h3>
          <p style={cardDescStyle}>
            Access admin dashboard, manage employees, create tasks and monitor performance.
          </p>
        </div>

        <div
          style={cardStyle}
          onClick={() => navigate("/employee-login")}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <h3 style={cardTitleStyle}>Employee Login</h3>
          <p style={cardDescStyle}>
            View assigned tasks, update task status, and track your performance.
          </p>
        </div>
      </div>
    </div>
  );
}
