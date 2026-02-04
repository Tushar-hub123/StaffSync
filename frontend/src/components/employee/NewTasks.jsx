import { useEffect, useState } from "react";
import axios from "axios";

const NewTasks = ({ employeeId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/employee/tasks/new/${employeeId}`)
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, [employeeId]);

  const acceptTask = async (id) => {
    await axios.put(`http://localhost:5000/api/employee/task/accept/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  const rejectTask = async (id) => {
    await axios.put(`http://localhost:5000/api/employee/task/reject/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <div>
      <h3>New Tasks</h3>

      {tasks.length === 0 && <p>No new tasks</p>}

      {tasks.map(task => (
        <div key={task._id}>
          <p>{task.title}</p>
          <button onClick={() => acceptTask(task._id)}>Accept</button>
          <button onClick={() => rejectTask(task._id)}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default NewTasks;
