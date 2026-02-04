const TaskTabs = ({ setFilter, active }) => {
  return (
    <div className="tabs">
      <button onClick={() => setFilter("NEW")} className={active==="NEW" ? "active" : ""}>New Tasks</button>
      <button onClick={() => setFilter("PENDING")} className={active==="PENDING" ? "active" : ""}>Pending</button>
      <button onClick={() => setFilter("COMPLETED")} className={active==="COMPLETED" ? "active" : ""}>Completed</button>
      <button onClick={() => setFilter("ALL")} className={active==="ALL" ? "active" : ""}>My Tasks</button>
    </div>
  );
};

export default TaskTabs;
