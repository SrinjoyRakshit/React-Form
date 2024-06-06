import { React, useState } from "react";
import { Formik, useFormik } from "formik";
import "./App.css";
import { signupSchema } from "./schemas";

const initialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  number: "",
  country: "",
  city: "",
  panNumber: "",
  aadharNumber: "",
};

function App() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm()
    },
  });
  console.log(errors);
  return (
    <>
      <h1 className="title">React Form</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label className="label" htmlFor="firstname">
              First Name
            </label>
            <input
              type="name"
              name="firstname"
              id="fname"
              value={values.firstname}
              placeholder="Enter your first name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstname &&  touched.firstname ? <p className="form-errorr">{errors.firstname}</p> : null}
          </div>
          <div className="input-block">
            <label className="label" htmlFor="lastname">
              Last Name
            </label>
            <input
              type="name"
              name="lastname"
              id="lname"
              value={values.lastname}
              placeholder="Enter your last name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastname &&  touched.lastname ?<p className="form-errorr">{errors.lastname}</p> : null}
          </div>
          <div className="input-block">
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              type="name"
              name="username"
              id="username"
              value={values.username}
              placeholder="Enter your username"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username &&  touched.username ?<p className="form-errorr">{errors.username}</p> : null}
          </div>
          <div className="input-block">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email &&  touched.email ?<p className="form-errorr">{errors.email}</p> : null}
          </div>
          <div className="input-block">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              placeholder="Enter your password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password &&  touched.password ?<p className="form-errorr">{errors.password}</p> : null}
          </div>
          <div className="input-block">
            <label className="label" htmlFor="number">
              Phone No.
            </label>
            <input
              type="number"
              name="number"
              id="number"
              value={values.number}
              placeholder="Your phone number"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.number &&  touched.number ?<p className="form-errorr">{errors.number}</p>: null}
          </div>
          <div className="input-block">
            <label className="label" htmlFor="country">
              Country
            </label>
            <select 
              name="country" 
              id="country" 
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              >
              <option value="country">Select Country</option>
              <option value="australia">Australia</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="canada">Canada</option>
              <option value="india">India</option>
              <option value="japan">Japan</option>
              <option value="germany">Germany</option>
              <option value="france">France</option>
            </select>
            {errors.country &&  touched.country ?<p className="form-errorr">{errors.country}</p> : null}
          </div>
          <div className="input-block">
            <label className="label" htmlFor="city">
              City
            </label>
            <select 
              name="city" 
              id="city" 
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              >
              <option value="city">Select City</option>
              <option value="kolkata">Kolkata</option>
              <option value="hooghly">Hooghly</option>
              <option value="paris">Paris</option>
              <option value="rome">Rome</option>
              <option value="shibuya">Shibuya</option>
              <option value="howrah">Howrah</option>
              <option value="lyon">Lyon</option>
            </select>
            {errors.city &&  touched.city ?<p className="form-errorr">{errors.city}</p> : null}
          </div>
          <div className="input-block">
            <label className="label" htmlFor="panNumber">
              Pan No.
            </label>
            <input
              type="number"
              name="panNumber"
              id="panNumber"
              value={values.panNumber}
              placeholder="Your pan number"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.panNumber &&  touched.panNumber ?<p className="form-errorr">{errors.panNumber}</p> : null}
          </div>
          <div className="input-block">
            <label className="label" htmlFor="aadharNumber">
              Aadhar No.
            </label>
            <input
              type="number"
              name="aadharNumber"
              id="aadharNumber"
              value={values.aadharNumber}
              placeholder="Your Aadhar number"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.aadharNumber &&  touched.aadharNumber ?<p className="form-errorr">{errors.aadharNumber}</p> : null}
          </div>
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
