const Employee = require("../models/Employee");
const Task = require("../models/Task");
const jwt = require("jsonwebtoken");

/* ===========================
   EMPLOYEE LOGIN
=========================== */
exports.employeeLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const employee = await Employee.findOne({ email, password });
    if (!employee) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { id: employee._id, role: "employee" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      id: employee._id,
      name: employee.name,
      email: employee.email
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
};

/* ===========================
   DASHBOARD COUNTS
=========================== */
exports.getEmployeeDashboard = async (req, res) => {
  try {
    const employeeId = req.params.employeeId;

    const total = await Task.countDocuments({ employee: employeeId });
    const completed = await Task.countDocuments({
      employee: employeeId,
      status: "COMPLETED"
    });
    const pending = await Task.countDocuments({
      employee: employeeId,
      status: "PENDING"
    });
    const newTasks = await Task.countDocuments({
      employee: employeeId,
      status: "NEW"
    });

    res.json({ total, completed, pending, newTasks });
  } catch (err) {
    res.status(500).json({ message: "Dashboard fetch failed" });
  }
};

/* ===========================
   GET TASKS BY STATUS
=========================== */
exports.getTasksByStatus = async (req, res) => {
  try {
    const { employeeId, status } = req.params;

    let filter = { employee: employeeId };

    if (status !== "ALL") {
      filter.status = status;
    }

    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Task fetch failed" });
  }
};

/* ===========================
   ACCEPT TASK
=========================== */
exports.acceptTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.taskId, {
      status: "PENDING",
      accepted: true
    });

    res.json({ message: "Task accepted" });
  } catch (err) {
    res.status(500).json({ message: "Accept failed" });
  }
};

/* ===========================
   REJECT TASK
=========================== */
exports.rejectTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.taskId, {
      status: "REJECTED"
    });

    res.json({ message: "Task rejected" });
  } catch (err) {
    res.status(500).json({ message: "Reject failed" });
  }
};

/* ===========================
   COMPLETE TASK
=========================== */
// exports.completeTask = async (req, res) => {
//   try {
//     await Task.findByIdAndUpdate(req.params.taskId, {
//       status: "COMPLETED"
//     });

//     res.json({ message: "Task completed" });
//   } catch (err) {
//     res.status(500).json({ message: "Complete failed" });
//   }
// };

exports.completeTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    await Task.findByIdAndUpdate(taskId, {
      status: "COMPLETED",
      completedAt: new Date(),
    });

    res.json({ message: "Task marked as completed" });
  } catch (error) {
    res.status(500).json({ message: "Failed to complete task" });
  }
};

