
import { useState } from "react";
import AddEmployee from "../components/AddEmployee";
import CreateTask from "../components/CreateTask";
import TaskHistory from "../components/TaskHistory";
import RemoveEmployee from "../components/RemoveEmployee";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("addEmployee");

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
        <h2 style={styles.logo}>Admin Panel</h2>

        <div style={styles.menu}>
          {menuItems.map((item) => (
            <button
              key={item.key}
              style={activeTab === item.key ? styles.activeBtn : styles.btn}
              onClick={() => setActiveTab(item.key)}
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

        <div style={styles.content}>
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
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "#f0f4f8",
  },
  sidebar: {
    width: "220px",
    background: "linear-gradient(180deg, #4f46e5, #3b82f6)",
    color: "#fff",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "40px",
    textAlign: "center",
    letterSpacing: "1px",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "15px",
  },
  btn: {
    padding: "12px 20px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
    fontWeight: "600",
    fontSize: "1rem",
    transition: "0.3s",
  },
  activeBtn: {
    padding: "12px 20px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "#fff",
    color: "#3b82f6",
    fontWeight: "700",
    fontSize: "1rem",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: "0.3s",
  },
  main: {
    flex: 1,
    padding: "40px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#1e293b",
    textAlign: "center",
  },
  content: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
    minHeight: "400px",
    transition: "0.3s",
  },
};
