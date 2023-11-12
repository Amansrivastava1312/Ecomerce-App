import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Layout from './component/layout/Layout.js';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/auth/Register";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./component/routes/Private";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AdminRoute from "./component/routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>

        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
