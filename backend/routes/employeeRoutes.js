const express = require("express");
const router = express.Router();

const {
  employeeLogin,
  getEmployeeDashboard,
  getTasksByStatus,
  acceptTask,
  rejectTask,
  completeTask
} = require("../controllers/employeeController");

/* ===== AUTH ===== */
router.post("/login", employeeLogin);

/* ===== DASHBOARD ===== */
router.get("/dashboard/:employeeId", getEmployeeDashboard);

/* ===== TASK FILTERING ===== */
router.get("/tasks/:employeeId/:status", getTasksByStatus);

/* ===== TASK ACTIONS ===== */
router.put("/task/accept/:taskId", acceptTask);
router.put("/task/reject/:taskId", rejectTask);
router.put("/task/complete/:taskId", completeTask);

module.exports = router;
