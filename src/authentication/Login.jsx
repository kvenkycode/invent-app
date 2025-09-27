import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with real authentication logic
    alert(`Login attempted for ${email}`);
    navigate("/dashboard"); // redirect after login
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5 p-4 border rounded shadow-sm bg-white" style={{maxWidth: 400}}>
      <h2 className="mb-4 text-center"><i className="bi bi-box-arrow-in-right me-2"></i>Login</h2>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-envelope"></i></span>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-lock"></i></span>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        <i className="bi bi-box-arrow-in-right me-2"></i>Login</button>
      <p className="mt-4 text-center">
          Don’t have an account?
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
    </form>
  );
};

export default Login;
