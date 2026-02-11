// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import LoginChoice from "./pages/LoginChoice";
// import AdminLogin from "./pages/AdminLogin";
// import EmployeeLogin from "./pages/EmployeeLogin";
// import AdminDashboard from "./pages/AdminDashboard";
// import EmployeeDashboard from "./pages/EmployeeDashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<LoginChoice />} />
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/employee-login" element={<EmployeeLogin />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/employee/dashboard/:employeeId" element={<EmployeeDashboard />}/>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboards */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route
          path="/employee-dashboard/:employeeId"
          element={<EmployeeDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
