import { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployee } from "../services/api";

const RemoveEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const fetchEmployees = async () => {
    const res = await getAllEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleRemove = async (id) => {
    if (!window.confirm("Are you sure you want to remove this employee?"))
      return;

    await deleteEmployee(id);
    fetchEmployees();
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase())
  );
return (
  <div style={{ padding: "20px" }}>
    <h2 style={{ marginBottom: "20px" }}>Remove Employee</h2>

    <input
      type="text"
      placeholder="Search employee..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "10px",
        width: "100%",
        maxWidth: "400px",
        marginBottom: "20px",
        borderRadius: "8px",
        border: "1px solid #ccc"
      }}
    />

    {filteredEmployees.map((emp) => (
      <div
        key={emp._id}
        style={{
          background: "#fff",
          padding: "15px",
          marginBottom: "12px",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: window.innerWidth < 768 ? "column" : "row",
          justifyContent: "space-between",
          alignItems: window.innerWidth < 768 ? "flex-start" : "center",
          gap: "10px"
        }}
      >
        <div>
          <b>{emp.name}</b>
          <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
            {emp.email}
          </p>
        </div>

        <button
          onClick={() => handleRemove(emp._id)}
          style={{
            background: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "20px",
            cursor: "pointer",
            width: window.innerWidth < 768 ? "100%" : "auto"
          }}
        >
          Remove
        </button>
      </div>
    ))}
  </div>
);
};

export default RemoveEmployee;


