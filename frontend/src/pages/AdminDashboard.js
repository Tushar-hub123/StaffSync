
import { useState } from "react";
import AddEmployee from "../components/AddEmployee";
import CreateTask from "../components/CreateTask";
import TaskHistory from "../components/TaskHistory";
import RemoveEmployee from "../components/RemoveEmployee";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("addEmployee");
  const [animate, setAnimate] = useState(false);

  const handleTabChange = (key) => {
    setAnimate(true);
    setTimeout(() => {
      setActiveTab(key);
      setAnimate(false);
    }, 200);
  };

  const menuItems = [
    { key: "addEmployee", label: "Add Employee" },
    { key: "createTask", label: "Create Task" },
    { key: "taskHistory", label: "Task History" },
    { key: "removeEmployee", label: "Remove Employee" },
  ];

  return (
    <div style={styles.container}>
      
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>StaffSync Admin</h2>

        <div style={styles.menu}>
          {menuItems.map((item) => (
            <button
              key={item.key}
              style={{
                ...styles.btn,
                ...(activeTab === item.key ? styles.activeBtn : {}),
              }}
              onClick={() => handleTabChange(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        <h1 style={styles.title}>
          {menuItems.find((m) => m.key === activeTab)?.label}
        </h1>

        <div
          style={{
            ...styles.content,
            ...(animate ? styles.fadeOut : styles.fadeIn),
          }}
        >
          {activeTab === "addEmployee" && <AddEmployee />}
          {activeTab === "createTask" && <CreateTask />}
          {activeTab === "taskHistory" && <TaskHistory />}
          {activeTab === "removeEmployee" && <RemoveEmployee />}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
  },

  /* Sidebar */
  sidebar: {
    width: "260px",
    background: "linear-gradient(180deg, #4f46e5, #3b82f6)",
    color: "#fff",
    padding: "40px 25px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "5px 0 30px rgba(0,0,0,0.1)",
  },

  logo: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "50px",
    letterSpacing: "1px",
    textAlign: "center",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  btn: {
    padding: "14px 20px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
    fontWeight: "500",
    fontSize: "15px",
    transition: "all 0.3s ease",
  },

  activeBtn: {
    background: "#fff",
    color: "#3b82f6",
    fontWeight: "700",
    transform: "translateX(6px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },

  /* Main */
  main: {
    flex: 1,
    padding: "50px",
  },

  title: {
    fontSize: "2.2rem",
    fontWeight: "700",
    marginBottom: "35px",
    color: "#1e293b",
    transition: "0.3s",
  },

  content: {
    background: "white",
    padding: "40px",
    borderRadius: "25px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
    minHeight: "500px",
    transition: "all 0.3s ease",
  },

  fadeIn: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: "all 0.3s ease",
  },

  fadeOut: {
    opacity: 0,
    transform: "translateY(15px)",
    transition: "all 0.2s ease",
  },
};
