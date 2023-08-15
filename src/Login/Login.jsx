import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Navigate to='/home' replace />;
  }
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='container-input'>
          <input
            type='email'
            required
            placeholder='Enter your email'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className='container-input'>
          <input
            type='password'
            required
            placeholder='Enter your password'
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <button className='container-button' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
