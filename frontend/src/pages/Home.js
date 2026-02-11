// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   const footerStyle = {
//     backgroundColor: "#1E293B",
//     color: "#fff",
//     padding: "20px",
//     textAlign: "center",
//   };

//   const linkStyle = {
//     color: "#38BDF8",
//     textDecoration: "none"
//   };

//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     minHeight: "100vh",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//   };

//   const heroStyle = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     padding: "80px 20px",
//     background: "linear-gradient(135deg, #4F46E5, #3B82F6)",
//     color: "#fff",
//     borderBottomLeftRadius: "50px",
//     borderBottomRightRadius: "50px",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
//   };

//   const sectionStyle = {
//     padding: "70px 20px",
//     textAlign: "center"
//   };

//   const titleStyle = {
//     fontSize: "2.3rem",
//     marginBottom: "20px",
//     color: "#1F2937"
//   };

//   const descStyle = {
//     maxWidth: "800px",
//     margin: "0 auto",
//     fontSize: "1.1rem",
//     color: "#4B5563",
//     lineHeight: "1.6"
//   };

//   const cardContainerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "30px",
//     marginTop: "40px"
//   };

//   const cardStyle = {
//     background: "#fff",
//     padding: "30px",
//     width: "260px",
//     borderRadius: "20px",
//     boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
//   };

//   const ctaStyle = {
//     background: "linear-gradient(135deg, #3B82F6, #2563EB)",
//     color: "#fff",
//     padding: "70px 20px",
//     textAlign: "center"
//   };

//   const buttonStyle = {
//     marginTop: "20px",
//     padding: "14px 40px",
//     fontSize: "1.1rem",
//     borderRadius: "30px",
//     border: "none",
//     cursor: "pointer",
//     backgroundColor: "#fff",
//     color: "#2563EB",
//     fontWeight: "600"
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Hero */}
//       <div style={heroStyle}>
//         <h1 style={{ fontSize: "3rem" }}>StaffSync</h1>
//         <p style={{ maxWidth: "600px", fontSize: "1.2rem", marginBottom: "30px" }}>
//           A centralized platform to manage employees, assign tasks, track progress,
//           and analyze performance efficiently.
//         </p>
//         <button style={buttonStyle} onClick={() => navigate("/login")}>
//           Get Started
//         </button>
//       </div>

//       {/* About */}
//       <div style={sectionStyle}>
//         <h2 style={titleStyle}>About StaffSync</h2>
//         <p style={descStyle}>
//           StaffSync is a modern employee task and workflow management system designed
//           to streamline task allocation, monitor productivity, and provide actionable
//           performance insights for growing teams.
//         </p>
//       </div>

//       {/* Core Features */}
//       <div style={{ ...sectionStyle, backgroundColor: "#F3F4F6" }}>
//         <h2 style={titleStyle}>Core Features</h2>
//         <div style={cardContainerStyle}>
//           <div style={cardStyle}>
//             <h3>Task Management</h3>
//             <p>Create, assign, and track employee tasks with ease.</p>
//           </div>
//           <div style={cardStyle}>
//             <h3>Performance Tracking</h3>
//             <p>Measure productivity based on task progress and completion.</p>
//           </div>
//           <div style={cardStyle}>
//             <h3>Real-Time Updates</h3>
//             <p>Instant task status updates for better coordination.</p>
//           </div>
//           <div style={cardStyle}>
//             <h3>Reports & Analytics</h3>
//             <p>Detailed insights to evaluate individual and team performance.</p>
//           </div>
//         </div>
//       </div>

//       {/* How It Works */}
//       <div style={sectionStyle}>
//         <h2 style={titleStyle}>How It Works</h2>
//         <div style={cardContainerStyle}>
//           <div style={cardStyle}>
//             <h3>1. Login</h3>
//             <p>Secure access for Admin and Employee roles.</p>
//           </div>
//           <div style={cardStyle}>
//             <h3>2. Assign Tasks</h3>
//             <p>Admins assign tasks with clear objectives.</p>
//           </div>
//           <div style={cardStyle}>
//             <h3>3. Update Progress</h3>
//             <p>Employees update task status in real time.</p>
//           </div>
//           <div style={cardStyle}>
//             <h3>4. Review Performance</h3>
//             <p>Admins track performance through dashboards.</p>
//           </div>
//         </div>
//       </div>

//       {/* User Roles */}
//       <div style={{ ...sectionStyle, backgroundColor: "#F9FAFB" }}>
//         <h2 style={titleStyle}>User Roles</h2>
//         <div style={cardContainerStyle}>
//           <div style={cardStyle}>
//             <h3>Admin</h3>
//             <p>Manages employees, tasks, and system data.</p>
//           </div>
//           <div style={cardStyle}>
//             <h3>Employee</h3>
//             <p>Views assigned tasks and updates progress.</p>
//           </div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div style={ctaStyle}>
//         <h2 style={{ fontSize: "2.5rem" }}>Manage Your Team Smarter</h2>
//         <p style={{ fontSize: "1.1rem" }}>
//           Improve productivity with structured task management.
//         </p>
//         <button style={buttonStyle} onClick={() => navigate("/login")}>
//           Login Now
//         </button>
//       </div>

//       {/* Footer */}
//       <footer style={footerStyle}>
//         <p>Email: <a href="mailto:support@staffsync.com" style={linkStyle}>support@staffsync.com</a></p>
//         <p>Phone: <a href="tel:+911234567890" style={linkStyle}>+91 12345 67890</a></p>
//         <p>&copy; 2026 StaffSync. All rights reserved.</p>
//       </footer>
//     </div>s
//   );
// }


import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">StaffSync</div>
        <div className="nav-actions">
          <button className="nav-login" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="nav-cta" onClick={() => navigate("/login")}>
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Elevate Your <span>Workforce</span> <br />
            Management Experience
          </h1>

          <p>
            Smart employee tracking, seamless task allocation,
            and powerful performance analytics — all in one place.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => navigate("/login")}
            >
              Start Free Trial
            </button>

            
          </div>
        </div>

        <div className="hero-right">
          <div className="glass-card card1"></div>
          <div className="glass-card card2"></div>
          <div className="glass-card card3"></div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Everything You Need</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Smart Task Control</h3>
            <p>Assign, monitor and manage tasks efficiently.</p>
          </div>

          <div className="feature-card">
            <h3>Real-Time Insights</h3>
            <p>Instant productivity tracking with dynamic dashboards.</p>
          </div>

          <div className="feature-card">
            <h3>Secure Role Access</h3>
            <p>Separate Admin & Employee workspaces.</p>
          </div>

          <div className="feature-card">
            <h3>Analytics & Reports</h3>
            <p>Make data-driven management decisions.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Transform The Way You Manage Teams</h2>
        <button onClick={() => navigate("/login")}>
          Get Started Today
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 StaffSync — Built for Modern Teams
      </footer>
    </div>
  );
}
