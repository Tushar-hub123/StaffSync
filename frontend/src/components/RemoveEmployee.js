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
    <div style={{ padding: "30px" }}>
      <h2>Remove Employee</h2>

      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px"
        }}
      />

      {filteredEmployees.map((emp) => (
        <div
          key={emp._id}
          style={{
            background: "#fff",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>
            <b>{emp.name}</b>
            <p style={{ margin: 0 }}>{emp.email}</p>
          </div>

          <button
            onClick={() => handleRemove(emp._id)}
            style={{
              background: "#ef4444",
              color: "#fff",
              border: "none",
              padding: "8px 16px",
              borderRadius: "20px",
              cursor: "pointer"
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


