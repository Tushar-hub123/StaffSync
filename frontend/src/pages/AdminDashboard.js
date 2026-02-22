
// import { useState } from "react";
// import AddEmployee from "../components/AddEmployee";
// import CreateTask from "../components/CreateTask";
// import TaskHistory from "../components/TaskHistory";
// import RemoveEmployee from "../components/RemoveEmployee";

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("addEmployee");
//   const [animate, setAnimate] = useState(false);

//   const handleTabChange = (key) => {
//     setAnimate(true);
//     setTimeout(() => {
//       setActiveTab(key);
//       setAnimate(false);
//     }, 200);
//   };

//   const menuItems = [
//     { key: "addEmployee", label: "Add Employee" },
//     { key: "createTask", label: "Create Task" },
//     { key: "taskHistory", label: "Task History" },
//     { key: "removeEmployee", label: "Remove Employee" },
//   ];

//   return (
//     <div style={styles.container}>
      
//       {/* Sidebar */}
//       <div style={styles.sidebar}>
//         <h2 style={styles.logo}>StaffSync Admin</h2>

//         <div style={styles.menu}>
//           {menuItems.map((item) => (
//             <button
//               key={item.key}
//               style={{
//                 ...styles.btn,
//                 ...(activeTab === item.key ? styles.activeBtn : {}),
//               }}
//               onClick={() => handleTabChange(item.key)}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div style={styles.main}>
//         <h1 style={styles.title}>
//           {menuItems.find((m) => m.key === activeTab)?.label}
//         </h1>

//         <div
//           style={{
//             ...styles.content,
//             ...(animate ? styles.fadeOut : styles.fadeIn),
//           }}
//         >
//           {activeTab === "addEmployee" && <AddEmployee />}
//           {activeTab === "createTask" && <CreateTask />}
//           {activeTab === "taskHistory" && <TaskHistory />}
//           {activeTab === "removeEmployee" && <RemoveEmployee />}
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     minHeight: "100vh",
//     fontFamily: "'Poppins', sans-serif",
//     background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
//   },

//   /* Sidebar */
//   sidebar: {
//     width: "260px",
//     background: "linear-gradient(180deg, #4f46e5, #3b82f6)",
//     color: "#fff",
//     padding: "40px 25px",
//     display: "flex",
//     flexDirection: "column",
//     boxShadow: "5px 0 30px rgba(0,0,0,0.1)",
//   },

//   logo: {
//     fontSize: "1.8rem",
//     fontWeight: "700",
//     marginBottom: "50px",
//     letterSpacing: "1px",
//     textAlign: "center",
//   },

//   menu: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "18px",
//   },

//   btn: {
//     padding: "14px 20px",
//     borderRadius: "14px",
//     border: "none",
//     cursor: "pointer",
//     background: "rgba(255,255,255,0.1)",
//     color: "#fff",
//     fontWeight: "500",
//     fontSize: "15px",
//     transition: "all 0.3s ease",
//   },

//   activeBtn: {
//     background: "#fff",
//     color: "#3b82f6",
//     fontWeight: "700",
//     transform: "translateX(6px)",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
//   },

//   /* Main */
//   main: {
//     flex: 1,
//     padding: "50px",
//   },

//   title: {
//     fontSize: "2.2rem",
//     fontWeight: "700",
//     marginBottom: "35px",
//     color: "#1e293b",
//     transition: "0.3s",
//   },

//   content: {
//     background: "white",
//     padding: "40px",
//     borderRadius: "25px",
//     boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
//     minHeight: "500px",
//     transition: "all 0.3s ease",
//   },

//   fadeIn: {
//     opacity: 1,
//     transform: "translateY(0px)",
//     transition: "all 0.3s ease",
//   },

//   fadeOut: {
//     opacity: 0,
//     transform: "translateY(15px)",
//     transition: "all 0.2s ease",
//   },
// };


import { useState, useEffect } from "react";
import AddEmployee from "../components/AddEmployee";
import CreateTask from "../components/CreateTask";
import TaskHistory from "../components/TaskHistory";
import RemoveEmployee from "../components/RemoveEmployee";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("addEmployee");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { key: "addEmployee", label: "Add Employee" },
    { key: "createTask", label: "Create Task" },
    { key: "taskHistory", label: "Task History" },
    { key: "removeEmployee", label: "Remove Employee" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "addEmployee":
        return <AddEmployee />;
      case "createTask":
        return <CreateTask />;
      case "taskHistory":
        return <TaskHistory />;
      case "removeEmployee":
        return <RemoveEmployee />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.layout}>

      {/* Sidebar */}
      <div
        style={{
          ...styles.sidebar,
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
          position: isMobile ? "fixed" : "relative",
          zIndex: 1000
        }}
      >
        <div>
          <h2 style={styles.logo}>StaffSync</h2>
          <p style={styles.subtitle}>Admin Panel</p>
        </div>

        <div style={styles.menu}>
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveTab(item.key);
                if (isMobile) setSidebarOpen(false);
              }}
              style={{
                ...styles.menuButton,
                ...(activeTab === item.key ? styles.activeButton : {})
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isMobile && sidebarOpen && (
        <div
          style={styles.overlay}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div style={styles.main}>

        {/* Topbar */}
        <div style={styles.topbar}>
          {isMobile && (
            <button
              style={styles.hamburger}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
          )}

          <h1 style={styles.pageTitle}>
            {menuItems.find((m) => m.key === activeTab)?.label}
          </h1>
        </div>

        <div style={styles.contentWrapper}>
          {renderContent()}
        </div>

      </div>
    </div>
  );
}

const styles = {

  layout: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#F3F4F6"
  },

  sidebar: {
    width: "250px",
    backgroundColor: "#111827",
    color: "#fff",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    transition: "transform 0.3s ease"
  },

  logo: {
    fontSize: "1.6rem",
    fontWeight: "700"
  },

  subtitle: {
    fontSize: "0.9rem",
    color: "#9CA3AF",
    marginBottom: "30px"
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  menuButton: {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "none",
    background: "transparent",
    color: "#D1D5DB",
    textAlign: "left",
    cursor: "pointer",
    transition: "all 0.2s ease"
  },

  activeButton: {
    backgroundColor: "#2563EB",
    color: "#fff"
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 500
  },

  main: {
    flex: 1,
    padding: "30px"
  },

  topbar: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "25px"
  },

  hamburger: {
    fontSize: "22px",
    background: "none",
    border: "none",
    cursor: "pointer"
  },

  pageTitle: {
    fontSize: "1.6rem",
    fontWeight: "600",
    color: "#111827"
  },

  contentWrapper: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
  }
};