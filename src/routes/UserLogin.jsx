import React from "react";
import { LoginWidget } from "@venkatachandini/micro-widget";

import "./UserLogin.css";

const UserLogin = () => {
  const handleLogin = (data) => {
    alert("User login: " + JSON.stringify(data));
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-avatar">U</div>
        <h2>User Login</h2>
        <div className="login-widget-container">
          <LoginWidget type="user" onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
