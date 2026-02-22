

const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");
const Task = require("../models/Task");

/* ===========================
   GET ALL EMPLOYEES
=========================== */
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({}, "name email");
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch employees" });
  }
};

/* ===========================
   DELETE EMPLOYEE
=========================== */
exports.deleteEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;

    // delete employee
    await Employee.findByIdAndDelete(employeeId);

    // delete all tasks of employee
    await Task.deleteMany({ employee: employeeId });

    res.json({ message: "Employee removed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to remove employee" });
  }
};

/* ===========================
   CREATE TASK (UPDATED)
=========================== */
exports.createTask = async (req, res) => {
  try {
    const {
      employeeId,
      title,
      description,
      scheduleDate,
      deadlineDate,
    } = req.body;

    const task = new Task({
      employee: employeeId,
      title,
      description,
      scheduleDate,
      deadlineDate,
    });

    await task.save();

    res.json({ message: "Task Created Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create task" });
  }
};

/* ===========================
   TASK HISTORY
=========================== */
exports.getTaskHistory = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("employee", "name email")
      .sort({ createdAt: -1 });

    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch task history" });
  }
};

/* ===========================
   ADMIN LOGIN
=========================== */
exports.adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid Admin Credentials" });
};

/* ===========================
   ADD EMPLOYEE
=========================== */
exports.addEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({ message: "Employee Added Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add employee" });
  }
};
