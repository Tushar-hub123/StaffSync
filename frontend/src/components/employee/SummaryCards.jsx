import { useEffect, useState } from "react";
import axios from "axios";

const SummaryCards = ({ employeeId }) => {
  const [data, setData] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    newTasks: 0
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/employee/dashboard/${employeeId}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [employeeId]);

  return (
    <div>
      <p>Total Tasks: {data.total}</p>
      <p>Completed: {data.completed}</p>
      <p>Pending: {data.pending}</p>
      <p>New Tasks: {data.newTasks}</p>
    </div>
  );
};

export default SummaryCards;
