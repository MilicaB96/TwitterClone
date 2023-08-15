import React, { useState } from "react";
import "./register.css";
import { Link, Navigate } from "react-router-dom";

function Register({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Navigate to='/home' replace />;
  }
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
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
            type='text'
            required
            placeholder='Enter your First Name'
            value={data.first_name}
            onChange={(e) => setData({ ...data, first_name: e.target.value })}
          />
        </div>
        <div className='container-input'>
          <input
            type='text'
            required
            placeholder='Enter your Last Name'
            value={data.last_name}
            onChange={(e) => setData({ ...data, last_name: e.target.value })}
          />
        </div>
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
        <div className='container-input'>
          <input
            type='password'
            required
            placeholder='Enter your password again'
            value={data.password_confirmation}
            onChange={(e) =>
              setData({ ...data, password_confirmation: e.target.value })
            }
          />
        </div>
        <button className='container-button' type='submit'>
          Register
        </button>
        <p className='container-text'>
          Already have an account?{" "}
          <Link className='container-link' to='login'>
            {" "}
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
