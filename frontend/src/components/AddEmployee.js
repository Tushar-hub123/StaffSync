

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
    width: "100%",
    maxWidth: "450px",
    margin: "0 auto",
    background: "#fff",
    padding: window.innerWidth < 768 ? "25px" : "40px",
    borderRadius: "20px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    fontSize: window.innerWidth < 768 ? "1.4rem" : "1.8rem",
    fontWeight: "700",
    marginBottom: "25px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "14px",
    width: "100%",
  },

  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(90deg, #4f46e5, #3b82f6)",
    color: "#fff",
    fontWeight: "600",
    width: "100%",
  },
};  