
import { useEffect, useState } from "react";
import API from "../services/api";

export default function TaskHistory() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await API.get("/admin/tasks");
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching task history", error);
      }
    };
    fetchTasks();
  }, []);

  const formatDate = (date) => {
    if (!date) return "—";
    return new Date(date).toLocaleDateString();
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Task History</h3>

      {tasks.length === 0 ? (
        <p style={styles.noTasks}>No tasks created yet</p>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Employee</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Title</th>
                <th style={styles.th}>Description</th>
                <th style={styles.th}>Scheduled Date</th>
                <th style={styles.th}>Completed Date</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr
                  key={task._id}
                  style={index % 2 === 0 ? styles.trEven : styles.trOdd}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#e0f2fe")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background =
                      index % 2 === 0 ? "#f9fafb" : "#fff")
                  }
                >
                  <td style={styles.td}>{task.employee?.name}</td>
                  <td style={styles.td}>{task.employee?.email}</td>
                  <td style={styles.td}>{task.title}</td>
                  <td style={styles.td}>{task.description}</td>

                  <td style={styles.td}>
                    {formatDate(task.scheduleDate)}
                  </td>

                  <td style={styles.td}>
                    {task.status === "COMPLETED"
                      ? formatDate(task.completedAt)
                      : "—"}
                  </td>

                  <td style={{ ...styles.td, ...statusColor(task.status) }}>
                    {task.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Status colors
const statusColor = (status) => ({
  fontWeight: "600",
  color:
    status === "NEW"
      ? "#3b82f6"
      : status === "PENDING"
      ? "#f59e0b"
      : status === "COMPLETED"
      ? "#10b981"
      : "#ef4444",
});

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },
  title: {
    textAlign: "center",
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "30px",
  },
  noTasks: {
    textAlign: "center",
    fontSize: "1.1rem",
    color: "#6b7280",
  },
  tableWrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "900px",
  },
  th: {
    background: "linear-gradient(90deg, #4f46e5, #3b82f6)",
    color: "#fff",
    fontWeight: "700",
    padding: "15px",
    textAlign: "left",
  },
  td: {
    padding: "12px 15px",
    color: "#1f2937",
  },
  trEven: {
    background: "#f9fafb",
    transition: "0.3s",
  },
  trOdd: {
    background: "#fff",
    transition: "0.3s",
  },
};

