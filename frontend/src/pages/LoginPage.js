import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const endpoint = isAdmin
        ? "/admin/login"
        : "/employee/login";

      const res = await API.post(endpoint, { email, password });

      localStorage.setItem("token", res.data.token);

      if (isAdmin) {
        navigate("/admin-dashboard");
      } else {
        localStorage.setItem("employeeId", res.data.id);
        localStorage.setItem("employeeName", res.data.name);
        navigate(`/employee-dashboard/${res.data.id}`);
      }

    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className={`main-container ${isAdmin ? "admin-mode" : "employee-mode"}`}>
  <div className={`login-wrapper ${isAdmin ? "" : "slide"}`}>


        {/* LEFT PANEL (Welcome Section) */}
        <div className="switch-panel">
  {isAdmin ? (
    <>
      <h2>Welcome Admin!</h2>
      <p>
        Manage employees, assign tasks, and monitor overall performance
        from your centralized dashboard.
      </p>
      <button
        className="switch-button"
        onClick={() => setIsAdmin(false)}
      >
        I'm an Employee →
      </button>
    </>
  ) : (
    <>
      <h2>Welcome Back!</h2>
      <p>
        Track your assigned tasks, update progress, and stay productive
        with your personalized dashboard.
      </p>
      <button
        className="switch-button"
        onClick={() => setIsAdmin(true)}
      >
        I'm an Admin →
      </button>
    </>
  )}
</div>


        {/* RIGHT PANEL (Login Form) */}
        <div className="form-panel">
          <h2>{isAdmin ? "Admin Login" : "Employee Login"}</h2>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" onClick={handleLogin}>
            LOGIN
          </button>
        </div>

      </div>
    </div>
  );
}
