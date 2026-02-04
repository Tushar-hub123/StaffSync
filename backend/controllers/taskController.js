const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const { title, description, employeeId } = req.body;

  const task = new Task({
    title,
    description,
    employeeId
  });

  await task.save();
  res.json({ message: "Task Created Successfully" });
};

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find().populate("employeeId", "name email");
  res.json(tasks);
};

exports.getEmployeeTasks = async (req, res) => {
  const { employeeId } = req.params;
  const tasks = await Task.find({ employeeId });
  res.json(tasks);
};
