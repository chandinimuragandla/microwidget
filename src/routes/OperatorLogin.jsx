import React from "react";
import { LoginWidget } from "@venkatachandini/micro-widget";

import "./OperatorLogin.css"; // same CSS

const OperatorLogin = () => {
  const handleLogin = (data) => {
    alert("Operator login: " + JSON.stringify(data));
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-avatar">O</div>
        <h2>Operator Login</h2>
        <div className="login-widget-container">
          <LoginWidget type="operator" onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default OperatorLogin;
