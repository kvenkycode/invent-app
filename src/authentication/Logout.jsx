import React from "react";

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    // TODO: Add logout logic here
    if (onLogout) onLogout();
    alert("Logged out successfully");
  };

  return <button onClick={handleLogout} className="btn btn-outline-danger"><i className="bi bi-box-arrow-right me-2"></i>Logout</button>;
};

export default Logout;
