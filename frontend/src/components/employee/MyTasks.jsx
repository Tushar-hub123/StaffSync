import { useEffect, useState } from "react";
import axios from "axios";

const MyTasks = ({ employeeId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/tasks/employee/${employeeId}`)
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, [employeeId]);

  const completeTask = async (id) => {
    await axios.put(`http://localhost:5000/api/employee/task/complete/${id}`);
    setTasks(tasks.map(t =>
      t._id === id ? { ...t, status: "COMPLETED" } : t
    ));
  };

  return (
    <div>
      <h3>My Tasks</h3>

      {tasks.map(task => (
        <div key={task._id}>
          <p>{task.title} — {task.status}</p>
          {task.status !== "COMPLETED" && (
            <button onClick={() => completeTask(task._id)}>Complete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyTasks;
