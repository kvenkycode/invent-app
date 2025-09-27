import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // TODO: Add registration logic here
    alert(`Registered user: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5 p-4 border rounded shadow-sm bg-white" style={{maxWidth: 400}}>
      <h2 className="mb-4 text-center"><i className="bi bi-person-plus me-2"></i>Register</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-person"></i></span>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      </div>
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
      <div className="mb-3">
        <label className="form-label">Confirm Password</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-success w-100"><i className="bi bi-person-plus me-2"></i>Register</button>
    </form>
  );
};

export default Register;
