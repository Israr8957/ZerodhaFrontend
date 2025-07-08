import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  let handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let handleFormSubmit = (event) => {
    event.preventDefault();
    //console.log("frontend data ", formData);

    try {
      axios
        .post("http://localhost:3002/signup", {
          formData,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));
    } catch (err) {
      console.log(err);
    }

    setFormData({
      email: "",
      username: "",
      password: "",
    });
  };
  return (
    <div className="container">
      <div className="col-6 offset-3 mt-4">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Enter Email :{" "}
            </label>
            <input
              id="email"
              type="text"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="mb-3">
            <label id="username" className="form-label">
              Enter username :{" "}
            </label>

            <input
              type="text"
              id="username"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mb-3">
            <label id="password" className="form-label">
              Enter password :{" "}
            </label>
            <input
              id="password"
              type="text"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              required
            />
          </div>

          <button
            style={{ width: "20%" }}
            className="btn btn-primary m-auto p-2 fs-8 mb-5"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
