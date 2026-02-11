import { useEffect, useState } from "react";
import API from "../services/api";

export default function CreateTask() {
  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await API.get("/admin/employees");
        setEmployees(res.data);
      } catch (error) {
        console.error("Error fetching employees", error);
      }
    };
    fetchEmployees();
  }, []);

  const createTask = async () => {
    if (!employeeId || !title || !scheduleDate || !deadlineDate) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await API.post("/admin/create-task", {
        employeeId,
        title,
        description,
        scheduleDate,
        deadlineDate,
      });

      alert("Task Created Successfully!");
      setEmployeeId("");
      setTitle("");
      setDescription("");
      setScheduleDate("");
      setDeadlineDate("");
    } catch {
      alert("Error creating task");
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Create Task</h3>

      <div style={styles.form}>
        <select
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          style={styles.input}
        >
          <option value="">Select Employee</option>
          {employees.map((emp) => (
            <option key={emp._id} value={emp._id}>
              {emp.name} ({emp.email})
            </option>
          ))}
        </select>

        <input
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ ...styles.input, height: "100px", resize: "none" }}
        />

        {/* ✅ Scheduled Date */}
        <div>
          <label style={styles.label}>Scheduled Date</label>
          <input
            type="date"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* ✅ Deadline */}
        <div>
          <label style={styles.label}>Deadline</label>
          <input
            type="date"
            value={deadlineDate}
            onChange={(e) => setDeadlineDate(e.target.value)}
            style={styles.input}
          />
        </div>

        <button
          onClick={createTask}
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.opacity = 0.85)}
          onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
        >
          Create Task
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    background: "#fff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
    color: "#374151",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
  },
  button: {
    padding: "12px 20px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(90deg, #4f46e5, #3b82f6)",
    color: "#fff",
    fontWeight: "700",
    fontSize: "1rem",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
};


