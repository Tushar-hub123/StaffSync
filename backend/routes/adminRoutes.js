const express = require("express");
const router = express.Router();

const {
  adminLogin,
  addEmployee,
  getAllEmployees,
  createTask,
  getTaskHistory,
  deleteEmployee
} = require("../controllers/adminController");

router.post("/login", adminLogin);
router.post("/add-employee", addEmployee);
router.get("/employees", getAllEmployees);
router.post("/create-task", createTask);
router.delete("/employee/:employeeId", deleteEmployee);

// ✅ TASK HISTORY ROUTE
router.get("/tasks", getTaskHistory);

module.exports = router;
