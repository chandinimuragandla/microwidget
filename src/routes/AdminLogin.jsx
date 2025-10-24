import React from "react";
import { LoginWidget } from "micro-widget";
import "./AdminLogin.css"; // can use same CSS for all three

const AdminLogin = () => {
  const handleLogin = (data) => {
    alert("Admin login: " + JSON.stringify(data));
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-avatar">A</div>
        <h2>Admin Login</h2>
        <div className="login-widget-container">
          <LoginWidget type="admin" onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
