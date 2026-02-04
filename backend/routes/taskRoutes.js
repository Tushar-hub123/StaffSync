const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTasks,
  getEmployeeTasks
} = require("../controllers/taskController");

router.post("/create", createTask);
router.get("/all", getAllTasks);
router.get("/employee/:employeeId", getEmployeeTasks);

module.exports = router;
