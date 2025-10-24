import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserLogin from "./routes/UserLogin";
import AdminLogin from "./routes/AdminLogin";
import OperatorLogin from "./routes/OperatorLogin";

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="/user">User Login</Link>
        <Link to="/admin">Admin Login</Link>
        <Link to="/operator">Operator Login</Link>
      </nav>
      <Routes>
        <Route path="/user" element={<UserLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/operator" element={<OperatorLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
