import React from "react";

const LoginMsg = ({ onLogin }) => {
  return (
    <div className="login-success-message">
      <p>Login Successful!</p>
      <button className="logout-button" onClick={onLogin}>
        Logout
      </button>
    </div>
  );
};

export default LoginMsg;