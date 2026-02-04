import { useEffect, useState } from "react";
import axios from "axios";

const TaskList = ({ employeeId, filter }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/tasks/employee/${employeeId}`
    );

    let filtered = res.data;

    if (filter !== "ALL") {
      filtered = filtered.filter(t => t.status === filter);
    }

    setTasks(filtered.reverse()); // latest first
  };

  useEffect(() => {
    loadTasks();
  }, [filter]);

  const acceptTask = async (id) => {
    await axios.put(`http://localhost:5000/api/employee/task/accept/${id}`);
    loadTasks();
  };

  const rejectTask = async (id) => {
    await axios.put(`http://localhost:5000/api/employee/task/reject/${id}`);
    loadTasks();
  };

  const completeTask = async (id) => {
    await axios.put(`http://localhost:5000/api/employee/task/complete/${id}`);
    loadTasks();
  };

  return (
    <div className="task-list">
      {tasks.length === 0 && <p>No tasks found</p>}

      {tasks.map(task => (
        <div className="task-card" key={task._id}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <span className={`status ${task.status.toLowerCase()}`}>
            {task.status}
          </span>

          <div className="actions">
            {task.status === "NEW" && (
              <>
                <button onClick={() => acceptTask(task._id)}>Accept</button>
                <button className="danger" onClick={() => rejectTask(task._id)}>Reject</button>
              </>
            )}

            {task.status === "PENDING" && (
              <button onClick={() => completeTask(task._id)}>Complete</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
