import { useEffect, useState } from "react";
import axios from "axios";

const DashboardCards = ({ employeeId }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/employee/dashboard/${employeeId}`)
      .then(res => setData(res.data));
  }, [employeeId]);

  return (
    <div className="cards">
      <div className="card">Total<br />{data.total}</div>
      <div className="card pending">Pending<br />{data.pending}</div>
      <div className="card completed">Completed<br />{data.completed}</div>
      <div className="card new">New<br />{data.newTasks}</div>
    </div>
  );
};

export default DashboardCards;
