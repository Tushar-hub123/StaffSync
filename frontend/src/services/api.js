import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default API;

/* ================= EMPLOYEE APIs ================= */

// 🔹 Dashboard cards
export const getDashboard = (id) =>
  API.get(`/employee/dashboard/${id}`);

// 🔹 Fetch tasks by status (NEW / PENDING / COMPLETED / ALL)
export const getTasksByStatus = (employeeId, status) =>
  API.get(`/employee/tasks/${employeeId}/${status}`);


// 🔹 Actions
export const acceptTask = (taskId) =>
  API.put(`/employee/task/accept/${taskId}`);

export const rejectTask = (taskId) =>
  API.put(`/employee/task/reject/${taskId}`);

export const completeTask = (taskId) =>
  API.put(`/employee/task/complete/${taskId}`);

/* ========== ADMIN APIs ========== */

// get all employees
export const getAllEmployees = () =>
  API.get("/admin/employees");

// delete employee
export const deleteEmployee = (employeeId) =>
  API.delete(`/admin/employee/${employeeId}`);




