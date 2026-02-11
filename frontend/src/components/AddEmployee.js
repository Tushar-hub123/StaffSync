

import { useState } from "react";
import API from "../services/api";

export default function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addEmployee = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post("/admin/add-employee", {
        name,
        email,
        password,
      });
      alert("Employee Added Successfully!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      alert("Error adding employee");
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Add Employee</h3>
      <div style={styles.form}>
        <input
          style={styles.input}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.opacity = 0.85)}
          onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
          onClick={addEmployee}
        >
          Add Employee
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    background: "#fff",
    padding: "40px",
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
    letterSpacing: "1px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "12px 15px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    transition: "0.3s",
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
    transition: "0.3s",
  },
};


