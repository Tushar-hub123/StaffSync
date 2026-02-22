
// import { useEffect, useState } from "react";
// import {
//   getTasksByStatus,
//   acceptTask,
//   rejectTask,
//   completeTask
// } from "../services/api";

// const EmployeeDashboard = () => {
//   const employeeId = localStorage.getItem("employeeId");
//   const employeeName = localStorage.getItem("employeeName");

//   const [tasks, setTasks] = useState([]);
//   const [active, setActive] = useState("ALL");
//   const [loading, setLoading] = useState(false);

//   const formatDate = (date) =>
//     new Date(date).toLocaleDateString();

//   const fetchTasks = async (status) => {
//     try {
//       setLoading(true);
//       setActive(status);
//       const res = await getTasksByStatus(employeeId, status);
//       setTasks(res.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTasks("ALL");
//   }, []);

//   const handleAccept = async (id) => {
//     await acceptTask(id);
//     fetchTasks("NEW");
//   };

//   const handleReject = async (id) => {
//     await rejectTask(id);
//     fetchTasks("NEW");
//   };

//   const handleComplete = async (id) => {
//     await completeTask(id);
//     fetchTasks("PENDING");
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Welcome, {employeeName} 👋</h2>

//       <div style={styles.filters}>
//         {["ALL", "NEW", "PENDING", "COMPLETED"].map((s) => (
//           <button
//             key={s}
//             onClick={() => fetchTasks(s)}
//             style={styles.filter(active === s)}
//           >
//             {s}
//           </button>
//         ))}
//       </div>

//       {loading && <p>Loading...</p>}
//       {!loading && tasks.length === 0 && <p>No tasks found</p>}

//       {tasks.map((task) => (
//         <div key={task._id} style={styles.card}>
//           <h4>{task.title}</h4>
//           <p>{task.description}</p>

//           <p style={styles.date}>📅 Scheduled: {formatDate(task.scheduleDate)}</p>
//           <p style={styles.date}>⏰ Deadline: {formatDate(task.deadlineDate)}</p>

//           <b>Status: {task.status}</b>

//           <div style={{ marginTop: "10px" }}>
//             {task.status === "NEW" && (
//               <>
//                 <button
//                   style={styles.accept}
//                   onClick={() => handleAccept(task._id)}
//                 >
//                   Accept
//                 </button>
//                 <button
//                   style={styles.reject}
//                   onClick={() => handleReject(task._id)}
//                 >
//                   Reject
//                 </button>
//               </>
//             )}

//             {task.status === "PENDING" && (
//               <button
//                 style={styles.complete}
//                 onClick={() => handleComplete(task._id)}
//               >
//                 Complete
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EmployeeDashboard;

// const styles = {
//   container: {
//     padding: "30px",
//     background: "#f5f6fa",
//     minHeight: "100vh",
//   },
//   title: {
//     fontSize: "2rem",
//     fontWeight: "700",
//     marginBottom: "20px",
//   },
//   filters: {
//     display: "flex",
//     gap: "10px",
//     marginBottom: "20px",
//   },
//   filter: (active) => ({
//     padding: "8px 18px",
//     borderRadius: "20px",
//     border: "none",
//     cursor: "pointer",
//     fontWeight: "600",
//     background: active
//       ? "linear-gradient(90deg, #4f46e5, #3b82f6)"
//       : "#e0e0e0",
//     color: active ? "#fff" : "#333",
//   }),
//   card: {
//     background: "#fff",
//     padding: "20px",
//     marginBottom: "15px",
//     borderRadius: "15px",
//     boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//   },
//   date: {
//     color: "#6b7280",
//     fontSize: "0.95rem",
//   },
//   accept: {
//     background: "#10b981",
//     color: "#fff",
//     border: "none",
//     padding: "8px 15px",
//     borderRadius: "15px",
//     marginRight: "10px",
//   },
//   reject: {
//     background: "#ef4444",
//     color: "#fff",
//     border: "none",
//     padding: "8px 15px",
//     borderRadius: "15px",
//   },
//   complete: {
//     background: "#3b82f6",
//     color: "#fff",
//     border: "none",
//     padding: "8px 15px",
//     borderRadius: "15px",
//   },
// };


import { useEffect, useState } from "react";
import {
  getTasksByStatus,
  acceptTask,
  rejectTask,
  completeTask
} from "../services/api";

const EmployeeDashboard = () => {
  const employeeId = localStorage.getItem("employeeId");
  const employeeName = localStorage.getItem("employeeName");

  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState("ALL");
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString();

  const fetchTasks = async (status) => {
    try {
      setLoading(true);
      setActive(status);
      const res = await getTasksByStatus(employeeId, status);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks("ALL");
  }, []);

  const handleAccept = async (id) => {
    await acceptTask(id);
    fetchTasks("NEW");
  };

  const handleReject = async (id) => {
    await rejectTask(id);
    fetchTasks("NEW");
  };

  const handleComplete = async (id) => {
    await completeTask(id);
    fetchTasks("PENDING");
  };

  return (
    <div style={styles.container(isMobile)}>
      <h2 style={styles.title(isMobile)}>
        Welcome, {employeeName} 👋
      </h2>

      <div style={styles.filters(isMobile)}>
        {["ALL", "NEW", "PENDING", "COMPLETED"].map((s) => (
          <button
            key={s}
            onClick={() => fetchTasks(s)}
            style={styles.filter(active === s, isMobile)}
          >
            {s}
          </button>
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {!loading && tasks.length === 0 && <p>No tasks found</p>}

      {tasks.map((task) => (
        <div key={task._id} style={styles.card(isMobile)}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>

          <p style={styles.date}>
            📅 Scheduled: {formatDate(task.scheduleDate)}
          </p>
          <p style={styles.date}>
            ⏰ Deadline: {formatDate(task.deadlineDate)}
          </p>

          <b>Status: {task.status}</b>

          <div style={styles.buttonGroup(isMobile)}>
            {task.status === "NEW" && (
              <>
                <button
                  style={styles.accept(isMobile)}
                  onClick={() => handleAccept(task._id)}
                >
                  Accept
                </button>
                <button
                  style={styles.reject(isMobile)}
                  onClick={() => handleReject(task._id)}
                >
                  Reject
                </button>
              </>
            )}

            {task.status === "PENDING" && (
              <button
                style={styles.complete(isMobile)}
                onClick={() => handleComplete(task._id)}
              >
                Complete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeDashboard;

/* ================= STYLES ================= */

const styles = {
  container: (mobile) => ({
    padding: mobile ? "20px" : "30px",
    background: "#f5f6fa",
    minHeight: "100vh",
  }),

  title: (mobile) => ({
    fontSize: mobile ? "1.5rem" : "2rem",
    fontWeight: "700",
    marginBottom: "20px",
  }),

  filters: (mobile) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  }),

  filter: (active, mobile) => ({
    padding: mobile ? "6px 14px" : "8px 18px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: mobile ? "12px" : "14px",
    background: active
      ? "linear-gradient(90deg, #4f46e5, #3b82f6)"
      : "#e0e0e0",
    color: active ? "#fff" : "#333",
  }),

  card: (mobile) => ({
    background: "#fff",
    padding: mobile ? "15px" : "20px",
    marginBottom: "15px",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  }),

  date: {
    color: "#6b7280",
    fontSize: "0.9rem",
  },

  buttonGroup: (mobile) => ({
    marginTop: "10px",
    display: "flex",
    flexDirection: mobile ? "column" : "row",
    gap: "8px",
  }),

  accept: (mobile) => ({
    background: "#10b981",
    color: "#fff",
    border: "none",
    padding: mobile ? "8px" : "8px 15px",
    borderRadius: "15px",
    width: mobile ? "100%" : "auto",
  }),

  reject: (mobile) => ({
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: mobile ? "8px" : "8px 15px",
    borderRadius: "15px",
    width: mobile ? "100%" : "auto",
  }),

  complete: (mobile) => ({
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: mobile ? "8px" : "8px 15px",
    borderRadius: "15px",
    width: mobile ? "100%" : "auto",
  }),
};